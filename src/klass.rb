class Klass < Documentable
  attr_reader :name
  attr_reader :superklass
  attr_reader :superklass
  attr_reader :package
  attr_reader :description
  attr_reader :references

  def initialize(name, superklass, attributes, package)
    @name = name
    @superklass = superklass
    @attributes = attributes
    @package = package
  end

  def declaration
    c = Chunk.new
    c.puts 'class '
    c.print @name
    if @superklass
      c.print " extends #{@superklass}"
    end
    c.print ' {'
    attr_c = Chunk.new
    @attributes.each do |a|
      attr_c.merge(a.chunk)
    end
    c.merge attr_c.pad(1)
    c.puts '}'
  end

  def chunk
    Chunk.join(doc, declaration)
  end

  def path
    "#{AdobeCssdkToDts.root}/types/classes/#{package.name}/#{@name}.d.ts"
  end
end
