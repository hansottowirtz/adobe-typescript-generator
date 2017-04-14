module Downloader
  class << self
    def download(config, html_dir_path)
      response = HTTParty.get("#{config['urls']['root']}/#{config['urls']['classes']}")
      FileUtils.mkdir_p("#{html_dir_path}/classes")
      File.write("#{html_dir_path}/classes.html", response.body)
      doc = Nokogiri::HTML(response.body)
      as = doc.xpath('//a')
      l = as.length
      Parallel.each_with_index(as) do |a, i|
        href = a.attributes['href'].value
        next if !href.start_with?('com')
        md = /^(.+)\.(\w+)$/.match(a.attributes['title'].value)
        package = md[1]
        klass = md[2]
        package_dir_path = "#{html_dir_path}/classes/#{package}"
        FileUtils.mkdir_p package_dir_path
        file_path = "#{package_dir_path}/#{klass}.html"
        relative_file_path = file_path[html_dir_path.length+1..-1]
        if File.file? file_path
          puts "exists     \t#{i}/#{l}\t#{relative_file_path}"
          next
        end
        puts "downloading\t#{i}/#{l}\t#{relative_file_path}"
        File.open(file_path, 'w') do |f|
          f.write HTTParty.get("#{config['urls']['root']}/#{href}").body
        end
      end
    end
  end
end
