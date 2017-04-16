class Package
  class << self
    def get_or_new(name)
      package = (AdobeTypescriptGenerator.packages[name] ||= Package.new(name))
    end
  end

  attr_reader :name
  attr_reader :klasses

  def initialize(name)
    @name = name
    @klasses = []
  end

  def references_path
    Pathname.new "#{AdobeTypescriptGenerator.root}/types/packages/#{@name}/references.d.ts"
  end

  def dependencies_json_path
    Pathname.new "#{AdobeTypescriptGenerator.root}/types/configurations/#{@name}/dependencies.json"
  end

  def extra_globals_path
    Pathname.new "#{AdobeTypescriptGenerator.root}/types/configurations/#{@name}/extra-globals.d.ts"
  end

  def implementation_path
    Pathname.new "#{AdobeTypescriptGenerator.root}/types/configurations/#{@name}/implementation.d.ts"
  end

  def globals_path
    Pathname.new "#{AdobeTypescriptGenerator.root}/types/packages/#{@name}/globals.d.ts"
  end

  def add(klass)
    @klasses << klass
  end

  def write
    FileUtils.rm(references_path) if File.file?(references_path)
    FileUtils.rm(globals_path) if File.file?(globals_path)

    {references_path => '',
    dependencies_json_path => "[]\n",
    extra_globals_path => '',
    implementation_path => ''}
    .each do |path_to_create, content|
      if !File.file?(path_to_create)
        FileUtils.mkdir_p File.dirname(path_to_create)
        File.write path_to_create, content
      end
    end

    ref_f = File.open(references_path, 'a')
    ref_f.write "/// <reference path=\"#{implementation_path.relative_path_from(references_path.dirname)}\"/>\n"

    gbl_f = File.open(globals_path, 'a')
    gbl_f.write "/// <reference path=\"references.d.ts\"/>\n"
    ref_f.write "/// <reference path=\"#{extra_globals_path.relative_path_from(references_path.dirname)}\"/>\n"

    JSON.parse(File.read(dependencies_json_path)).each do |package_2_name|
      ref_f.write "/// <reference path=\"../../packages/#{package_2_name}/references.d.ts\"/>\n"
      gbl_f.write "/// <reference path=\"../../packages/#{package_2_name}/references.d.ts\"/>\n"
      gbl_f.write "/// <reference path=\"../../packages/#{package_2_name}/globals.d.ts\"/>\n"
    end

    @klasses.each do |klass|
      ref_f.write "/// <reference path=\"#{klass.path.relative_path_from(references_path.dirname)}\"/>\n"
      klass.write
      gbl_f.write "declare const #{klass.name}: typeof #{klass.namespaced_name};\n"
    end

    ref_f.close
    gbl_f.close
  end

  def namespace
    @namespace ||= @name.match(/com\.adobe\.(.+)/)[1].split('.').collect(&:capitalize).join
  end
end
