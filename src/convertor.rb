class Convertor
  attr_reader :path
  attr_reader :package

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
    du = DocUntangler.new(doc)

    return package
  end
end
