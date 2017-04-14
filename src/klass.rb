class Klass < Documentable
  attr_reader :name
  attr_reader :superklass_name
  attr_reader :package
  attr_reader :description
  attr_reader :references

  def initialize(name, superklass_name, attributes, package)
    @name = name
    @superklass_name = superklass_name
    @attributes = attributes
    @package = package
    @package.klasses[@name] = self
  end

  def declaration
    c = Chunk.new
    c.puts 'class '
    c.print @name
    if @superklass_name
      c.print " extends #{@superklass_name}"
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

  def superklass
    @superklass ||= @package.klasses[@superklass_name]
  end
end
