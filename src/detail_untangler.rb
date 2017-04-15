class DetailUntangler
  PROPERTY_REGEX = /^public (?:(static) )?function get (\w+)\(\):(\w+|\*)$/
  CONSTANT_REGEX = /^public static const (\w+):(\w+|\*) = (\w+)$/
  METHOD_REGEX = /^(?:(override) )?(?:(protected|public|flash_proxy) )?(?:(static) )?function (\w+)\(((?:(?:\w+): ?(?:\w+|\*) ?(?:= (?:[\w\d\.\/-]+))?,? ?)*)(?:, ?\.{3} ?(\w+))?\)(?:: ?(\w+|\*))?$/
  ARGUMENT_REGEX = /(?:(\w+): ?(\w+|\*) ?(?:= ([\w\d\.\/-]+))?,? ?)/
  ARGUMENT_TR_REGEX = /(\w+):(\w+|\*)(?: \(default = ([\w\d\.]+)\))?(?: [-—] \(([\w\.]+|\*)\) (.+))?/

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
      # args_str.scan(ARGUMENT_REGEX).each do |result|
      #   next if result.count(nil) == result.length
      #   @args << Argument.new(*result)
      # end
      # if spread_argument
      #   @args << Argument.new("...#{spread_argument}", 'any[]', nil)
      # end
      if parameters_span = body.xpath('.//span[text() = " Parameters "]')[0]
        trs = parameters_span.parent.next_sibling.xpath('.//tr')
        trs.each do |tr|
          text = tr.text
          next if text == "\u00A0"
          if text == '... args'
            @args << Argument.new('...args', 'any[]')
            next
          end
          md = ARGUMENT_TR_REGEX.match(text)
          arg_name = md[1]
          arg_type = Util.extract_type_from_dots(md[4] || md[2])
          arg_value = md[3]
          arg_desc = md[5].gsub(/[\r]/, '') if md[5]
          @args << arg = Argument.new(arg_name, arg_type, arg_value, arg_desc)
        end
      end
    end

    if a = body.xpath("//a[text() = '#{org_type}']").last
      @type = Util.extract_type_from_a(a, org_type)
    else
      @type = Types.get(org_type)
    end
  end

  def to_attribute
    Attribute.new(@name, @kind, @readonly, @description, @type, @override, @static, @access_modifier, @args)
  end
end
