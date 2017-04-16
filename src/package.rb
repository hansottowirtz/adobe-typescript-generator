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

  def path
    Pathname.new "#{AdobeTypescriptGenerator.root}/types/packages/#{@name}/index.d.ts"
  end

  def dependencies_path
    Pathname.new "#{AdobeTypescriptGenerator.root}/types/dependencies/#{@name}/dependencies.d.ts"
  end

  def relative_path_from(other_path)
    path.relative_path_from(other_path.dirname)
  end

  def relative_dependencies_path_from(other_path)
    dependencies_path.relative_path_from(other_path.dirname)
  end

  def add(klass)
    @klasses << klass
  end

  def write
    FileUtils.rm(path) if File.file?(path)
    FileUtils.mkdir_p File.dirname(path)

    File.open(path, 'a') do |f|
      if File.file? dependencies_path
        f.write "/// <reference path=\"#{relative_dependencies_path_from(path)}\"/>\n"
      end
      @klasses.each do |klass|
        f.write "/// <reference path=\"#{klass.relative_path_from(path)}\"/>\n"
        klass.write
      end
    end
  end

  def namespace
    @name.match(/com\.adobe\.(.+)/)[1].split('.').collect(&:capitalize).join
  end
end
