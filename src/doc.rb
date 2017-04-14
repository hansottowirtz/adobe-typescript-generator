module Doc
  class << self
    def generate(description, summary, doc_tags = [])
      chunk = Chunk.new
      header = '/**'
      footer = '*/'

      l = 60

      if summary
        doc_tags.unshift DocTag.new('summary', summary)
      elsif doc_tags.empty?
        return chunk if !description
        return chunk.puts "#{header} #{description} #{footer}" if !description.include?("\n") && description.length < l
      end

      body_chunk = Chunk.new
      body_chunk.puts description if description

      doc_tags.each do |doc_tag|
        body_chunk.puts doc_tag.to_s
      end

      # if description
      #   doc_description = '* '+description
      #     .scan(/.{1,100}(?: |$)/)
      #     .join("\n* ")
      #
      #   chunk.puts_with_pad(doc_description, 1, ' ')
      # end

      body_chunk_2 = Chunk.new
      body_chunk_2.puts body_chunk.to_s.scan(/.{1,#{l}}(?: |$)/).join("\n")

      return Chunk.join(
        Chunk.new(header),
        body_chunk_2.pad(1, ' ').pad(1, '*').pad(1, ' '),
        Chunk.new(footer).pad(1, ' ')
      )
    end
  end
end
