class Argument
  attr_reader :name
  attr_reader :type
  attr_reader :value

  def initialize(name, type, value = nil, description = nil)
    @name = name
    @name = "_#{@name}"if Typescript::RESERVED_KEYWORDS.include?(@name)
    @type = type
    @value = value
    @description = description
  end

  def to_s
    s = "#{@name}: #{@type}"
    # s << " = #{@value}" if @value
    s
  end

  def doc_tag
    if @name.start_with?('...')
      text = "{...any} #{@name[3..-1]}"
    else
      text = "{#{@type}} #{@name}"
    end
    text << " #{@description}" if @description
    DocTag.new('param', text)
  end
end
