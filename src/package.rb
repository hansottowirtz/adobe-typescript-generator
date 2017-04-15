class Package
  class << self
    def get_or_new(name)
      @list ||= {}
      package = (@list[name] ||= Package.new(name))
    end
  end

  attr_reader :name

  def initialize(name)
    @name = name
    FileUtils.rm(path) if File.file?(path)
    FileUtils.mkdir_p File.dirname(path)
    FileUtils.touch(path)
    if File.file? dependencies_path
      File.open(path, 'a') do |f|
        f.write "/// <reference path=\"#{relative_dependencies_path_from(path)}\"/>\n"
      end
    end
  end

  def path
    Pathname.new "#{AdobeCssdkToDts.root}/types/namespaces/#{@name}/index.d.ts"
  end

  def dependencies_path
    Pathname.new "#{AdobeCssdkToDts.root}/types/dependencies/#{@name}/dependencies.d.ts"
  end

  def relative_path_from(other_path)
    path.relative_path_from(other_path.dirname)
  end

  def relative_dependencies_path_from(other_path)
    dependencies_path.relative_path_from(other_path.dirname)
  end

  def write(klass)
    File.open(path, 'a') do |f|
      f.write "/// <reference path=\"#{klass.relative_path_from(path)}\"/>\n"
    end
  end

  def namespace
    @name.match(/com\.adobe\.(.+)/)[1].split('.').collect(&:capitalize).join
  end
end
