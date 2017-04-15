class Klass < Documentable
  attr_reader :name
  attr_reader :superklass_name
  attr_reader :package
  attr_reader :description
  attr_reader :references

  def initialize(name, superklass_name, attributes, package, description)
    @name = name
    @superklass_name = superklass_name
    @attributes = attributes
    @package = package
    @description = description
  end

  def doc
    Doc.generate(@description, @summary)
  end

  def declaration
    c = Chunk.new

    # if @description.include?('provides access to the global class of the package')
    #   puts @name
    # else
    c.puts 'class '
    c.print @name
    if @superklass_name && @superklass_name != 'any'
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
    Pathname.new "#{AdobeCssdkToDts.root}/types/classes/#{package.name}/#{@name}.d.ts"
  end

  def relative_path_from(other_path)
    path.relative_path_from(other_path.dirname)
  end

  def superklass
    @superklass ||= @package.klasses[@superklass_name]
  end
end
