class Chunk
  attr_reader :lines

  def initialize(line = nil)
    @lines = []
    puts(line) if line
  end

  def puts(line)
    line.split("\n").each { |l| @lines << l }
    self
  end

  def print(words)
    lines << '' if !lines.last
    lines.last << words
    self
  end

  def to_s
    @lines.join("\n")
  end

  def merge(*chunks)
    chunks.each {|c| lines.concat c.lines}
    self
  end

  def self.join(*chunks)
    chunk = Chunk.new
    chunks.each {|c| chunk.lines.concat c.lines}
    chunk
  end

  def self.join_n(n, *chunks)
    chunk = Chunk.new
    chunks.each {|c| chunk.lines.concat c.lines; n.times { chunk.lines << '' }}
    chunk
  end

  def pad(n, c = "\t")
    Chunk.new(c * n + @lines.join("\n#{c * n}"))
  end

  def puts_with_pad(line, n, c = "\t")
    merge(Chunk.new(line).pad(n, c))
  end
end
