require 'fileutils'
require 'httparty'
require 'nokogiri'
require 'parallel'
require 'pry'
require 'ruby-progressbar'
require 'pathname'
require 'set'
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

module AdobeTypescriptGenerator
  class << self
    def pwd
      Pathname.new Dir.pwd
    end

    def root
       Pathname.new File.expand_path('..', __dir__)
    end

    def config
      @config ||= YAML.load_file("#{root}/config.yml")
    end

    def download_html(args)
      Downloader.download(config, "#{root}/html", args)
    end

    def convert_all(selector = nil)
      paths = Dir["#{root}/html/classes/**/*.html"] # .shuffle
       if selector && !selector.empty?
        paths.select! do |path|
          path.include?(selector) ||
          path.include?('com.adobe.csawlib/') ||
          path.include?('com.adobe.csawlib.misc/')
        end
      end

      progressbar = ProgressBar.create(
        total: paths.length,
        # format: "%a %b\u{15E7}%i %p%% %t",
        format: "%a %b\u{02A6}%i %p%% %t",
        progress_mark: ' ',
        remainder_mark: "\u{FF65}"
      )
      paths.each do |path|
        convert(path)
        progressbar.increment
      end
      packages.values.each(&:write)
    end

    def convert(path)
      absolute_path = Pathname.new File.expand_path(path, root)
      Convertor.new(absolute_path).convert
    end

    def packages
      @packages ||= {}
    end
  end
end
