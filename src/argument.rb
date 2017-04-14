class Argument
  attr_reader :name
  attr_reader :type
  attr_reader :value

  def initialize(name, type, value)
    @name = name
    @name = "_#{@name}"if Typescript::RESERVED_KEYWORDS.include?(@name)
    @type = Types.get(type)
    @value = value
  end

  def to_s
    s = "#{@name}: #{@type}"
    # s << " = #{@value}" if @value
    s
  end
end
