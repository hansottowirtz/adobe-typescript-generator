module Downloader
  class << self
    def download(config, html_dir_path, args)
      classes_path = "#{html_dir_path}/classes.html"

      path_url_map = {}

      FileUtils.mkdir_p "#{html_dir_path}/classes"
      FileUtils.mkdir_p "#{html_dir_path}/lists"

      config['urls'].each do |version, version_urls|
        root_url = version_urls['root']
        response = HTTParty.get("#{root_url}/#{version_urls['classes'] || 'class-summary.html'}")

        version_path = "#{html_dir_path}/lists/#{version}/class-summary.html"

        FileUtils.mkdir_p File.dirname(version_path)
        File.write(version_path, response.body)

        doc = Nokogiri::HTML(response.body)
        klass_as = doc.css('.summaryTableSecondCol a')
        klass_urls = klass_as.collect{|a| "#{root_url}/#{a['href']}"}
        klass_names = klass_as.collect(&:text)
        package_names = doc.css('.summaryTableCol a').collect(&:text)

        klass_names.each_with_index do |klass_name, i|
          package_name = package_names[i]
          klass_url = klass_urls[i]
          package_klasses_dir_path = "#{html_dir_path}/classes/#{package_name}"
          file_path = "#{package_klasses_dir_path}/#{klass_name}.html"

          path_url_map[file_path] = klass_url
        end
      end

      Parallel.each_with_index(path_url_map, progress: true) do |(path, url), i|
        next if File.file?(path) && args.include?('--skip-existing')
        FileUtils.mkdir_p File.dirname(path)
        download_file(url, path)
      end

      path_url_map.each_with_index do |(path, url), i|
        if File.zero?(path)
          puts "File empty, redownloading: #{path}, #{url}"
          download_file(url, path)
        end
      end
    end

    def download_file(url, path)
      File.open(path, 'w') do |f|
        f.write HTTParty.get(url).body
      end
    end
  end
end
