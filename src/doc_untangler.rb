class DocUntangler
  def initialize(doc)
    inheritanceList = doc.css('.inheritanceList')[0]
    if a = inheritanceList.css('a')[0]
      superklass_name = Util.extract_type_from_a(a, a.text.strip)
    else
      #inheritanceList.xpath('')[0]
      superklass_name = Types.get(Util.extract_type_from_dots(inheritanceList.xpath('.//text()')[1].text.strip))
    end
    signature = doc.css('.classSignature')[0].text
    md = signature.strip.gsub(/ +/, ' ').match(/^(public) ?(dynamic)? ?class (\w+)$/)
    klass_name = md[3]
    attributes = []
    if p_d_text = doc.xpath("//text()[. = 'Property Detail' or . = 'Method Detail' or . = 'Constructor Detail']")[0]
      main = p_d_text.parent.parent
      main.css('.detailHeader').each do |header|
        attributes << DetailUntangler.new(header, header.next_sibling).to_attribute
      end
    end
    package_name = doc.xpath("//text()[. = 'Package']")[0].parent.next_sibling.text
    # binding.pry
    description = doc.css('.classHeaderTable')[0].parent.xpath('text()').text.gsub(/[\r\n\t\r]/, '')
    description = nil if description.empty?
    @package = Package.get_or_new(package_name)
    @klass = Klass.new(klass_name, superklass_name, attributes, @package, description)
  end

  def to_klass
    @package.write @klass
    @klass
  end
end
