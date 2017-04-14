class DocTag
  attr_reader :name
  attr_reader :text

  def initialize(name, text = nil)
    @name = name
    @text = text
  end

  def to_s
    if text then "@#{name} #{text}" else "@#{name}" end
  end
end
