class Convertor
  attr_reader :path

  def initialize(path)
    @path = path
  end

  def convert
    file = File.read(@path)
    if file.empty?
      puts "Empty file, removing, please redownload: #{@path}"
      FileUtils.rm @path
      return
    end
    doc = Nokogiri::HTML(file)
    klass = DocUntangler.new(doc).to_klass
    FileUtils.mkdir_p File.dirname(klass.path)
    adobe_chunk = Chunk.new
    adobe_chunk.puts "/// <reference path=\"#{klass.package.relative_path_from(klass.path)}\"/>"
    adobe_chunk.lines << ''
    adobe_chunk.puts 'declare namespace Adobe {'
    namespace_chunk = Chunk.new("namespace #{klass.package.namespace} {")
    namespace_chunk.merge klass.chunk.pad(1)
    namespace_chunk.puts '}'
    adobe_chunk.merge namespace_chunk.pad(1)
    adobe_chunk.puts '}'
    File.write klass.path, adobe_chunk
  end
end
