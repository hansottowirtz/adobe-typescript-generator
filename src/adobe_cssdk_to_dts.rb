require 'fileutils'
require 'httparty'
require 'nokogiri'
require 'parallel'
require 'pry'
require_relative './doc'
require_relative './doc_tag'
require_relative './documentable'
require_relative './attribute'
require_relative './argument'
require_relative './chunk'
require_relative './convertor'
require_relative './doc_untangler'
require_relative './detail_untangler'
require_relative './downloader'
require_relative './klass'
require_relative './types'
require_relative './package'
require_relative './typescript'
require_relative './util'

module AdobeCssdkToDts
  class << self
    def pwd
       Dir.pwd
    end

    def root
       File.expand_path('..', __dir__)
    end

    def config
      @config ||= YAML.load_file("#{root}/config.yml")
    end

    def download_html
      Downloader.download(config, "#{root}/html")
    end

    def convert_all
      paths = Dir["#{root}/html/classes/**/*.html"]
      # Parallel.each(paths, progress: true) do |path|
      #   convert(path)
      # end
      paths.each do |path|
        convert(path)
      end
    end

    def convert(path)
      absolute_path = File.expand_path(path, root)
      Convertor.new(absolute_path).convert
    end
  end
end
