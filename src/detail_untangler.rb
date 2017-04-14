class DetailUntangler
  PROPERTY_REGEX = /^public (?:(static) )?function get (\w+)\(\):(\w+|\*)$/
  CONSTANT_REGEX = /^public static const (\w+):(\w+|\*) = (\w+)$/
  METHOD_REGEX = /^(?:(override) )?(?:(protected|public|flash_proxy) )?(?:(static) )?function (\w+)\(((?:(?:\w+): ?(?:\w+|\*) ?(?:= (?:[\w\d\.\/-]+))?,? ?)*)(?:, ?\.{3} ?(\w+))?\)(?:: ?(\w+|\*))?$/
  ARGUMENT_REGEX = /(?:(\w+): ?(\w+|\*) ?(?:= ([\w\d\.\/-]+))?,? ?)/

  def initialize(header, body)
    @name = header.css('.detailHeaderName')[0].text
    @kind = header.css('.detailHeaderType')[0].text.downcase
    if !['property', 'method', 'constructor', 'constant'].include?(@kind)
      binding.pry
      raise "no property or method: #{@kind}"
    end
    @description = body.css('p')
      .collect{|par| par.xpath('text()').text.strip}
      .reject(&:empty?)
      .join("\n")

    implementation = body.css('code')[0].text.strip
    @readonly = false

    case @kind
    when 'property'
      prop_regex =
      s = body.xpath("//text()[. = ' Implementation ']")[0] # .next_sibling.next_sibling.text
      text = body.css('code')[1].text.gsub(/\A\p{Space}*/, '').strip
      md = PROPERTY_REGEX.match(text)
      @access_modifier = 'public'
      @static = !!md[1]
      org_type = md[3]
      @readonly = body.text.include?('[read-only]')
      # binding.pry if @name == 'PLACEATEND'
    when 'constant'
      const_regex = /^public static const (\w+):(\w+|\*) = (\w+)$/
      md = CONSTANT_REGEX.match(implementation)
      @name = md[1]
      @type = md[2]
    when 'method', 'constructor'
      md = METHOD_REGEX.match(implementation)
      @override = !!md[1]
      @access_modifier = md[2]
      @static = !!md[3]
      args_str = md[5]
      spread_argument = md[6]
      org_type = md[7]
      @args = []
      args_str.scan(ARGUMENT_REGEX).each do |result|
        next if result.count(nil) == result.length
        @args << Argument.new(*result)
      end
      if spread_argument
        @args << Argument.new("...#{spread_argument}", 'any[]', nil)
      end
    end
    @type = Types.get(org_type)
  end

  def to_attribute
    Attribute.new(@name, @kind, @readonly, @description, @type, @override, @static, @access_modifier, @args)
  end
end
