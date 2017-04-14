class DocUntangler
  def initialize(doc)
    if a = doc.css('.inheritanceList a')[0]
      superklass = a.text.strip
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
    @package = Package.get_or_new(package_name)
    @klass = Klass.new(klass_name, superklass, attributes, @package)
  end

  def to_klass
    @package.write @klass
    @klass
  end
end
