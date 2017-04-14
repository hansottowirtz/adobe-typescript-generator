class Package
  class << self
    def get_or_new(name)
      @list ||= {}
      package = (@list[name] ||= Package.new(name))
    end
  end

  attr_reader :name
  attr_reader :klasses

  def initialize(name)
    @name = name
    @klasses = {}
    FileUtils.rm(path) if File.file?(path)
    FileUtils.mkdir_p File.dirname(path)
    FileUtils.touch(path)
    dependencies_path = "#{AdobeCssdkToDts.root}/types/dependencies/#{@name}/dependencies.d.ts"
    if File.file? dependencies_path
      File.open(path, 'a') do |f|
        f.flock(File::LOCK_EX)
        f.write "/// <reference path=\"#{dependencies_path}\"/>\n"
      end
    end
  end

  def path
    "#{AdobeCssdkToDts.root}/types/namespaces/#{@name}/index.d.ts"
  end

  def write(klass)
    File.open(path, 'a') do |f|
      f.flock(File::LOCK_EX)
      f.write "/// <reference path=\"#{klass.path}\"/>\n"
    end
  end

  def namespace
    @name.match(/com\.adobe\.(.+)/)[1].split('.').collect(&:capitalize).join
  end
end
