class DocUntangler
  INDEX_ATTRIBUTES_NAMES = ['index', 'nextNameIndex', 'nextValue']

  def initialize(doc)
    package_name = doc.xpath("//text()[. = 'Package']")[0].parent.next_sibling.text
    inheritanceList = doc.css('.inheritanceList')[0]
    if inheritanceList
      if a = inheritanceList.css('a')[0]
        superklass_name = Util.extract_type_from_a(a, a.text.strip, package_name)
      else
        #inheritanceList.xpath('')[0]
        superklass_name = Types.get(Util.extract_type_from_dots(inheritanceList.xpath('.//text()')[1].text.strip))
      end
    else
      superklass_name = 'any'
    end
    signature = doc.css('.classSignature')[0].text
    md = signature.strip.gsub(/ +/, ' ').match(/^public ?(dynamic)? ?(class|interface) (\w+)$/)
    klass_name = md[3]
    attributes = []
    if p_d_text = doc.xpath("//text()[. = 'Property Detail' or . = 'Method Detail' or . = 'Constructor Detail' or . = 'Event Detail']")[0]
      main = p_d_text.parent.parent
      main.css('.detailHeader').each do |header|
        attributes << DetailUntangler.new(header, header.next_sibling).attribute
      end
    end
    if index_attributes?(attributes)
      attributes.reject!{ |a| (INDEX_ATTRIBUTES_NAMES - ['index']).include?(a.name) }
    end

    description = doc.css('.classHeaderTable')[0].parent.xpath('text()').text.strip.gsub(/[\r\n\t\r\u00a0]/, '')
    description = nil if description.empty?
    @package = Package.get_or_new(package_name)
    @klass = Klass.new(klass_name, superklass_name, attributes, @package, description)
    @package.add(@klass)
  end

  def klass
    @klass
  end

  def package
    @package
  end

  private
  def index_attributes?(attrs)
    INDEX_ATTRIBUTES_NAMES.each do |name|
      if !attrs.collect(&:name).include?(name)
        return false
      end
    end
    return true
  end
end
