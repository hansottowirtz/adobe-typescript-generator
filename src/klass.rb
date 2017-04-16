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
    c.puts "class #{@name} "
    c.print "extends #{@superklass_name} " if @superklass_name && @superklass_name != 'any'
    c.print '{'
    attr_c = Chunk.new
    @attributes.each{ |a| attr_c.merge(a.chunk) }
    c.merge attr_c.pad(1)
    c.puts '}'
    return c
  end

  def chunk
    Chunk.join(doc, declaration)
  end

  def path
    Pathname.new "#{AdobeTypescriptGenerator.root}/types/classes/#{package.name}/#{@name}.d.ts"
  end

  def superklass
    @superklass ||= @package.klasses[@superklass_name]
  end

  def write
    FileUtils.mkdir_p File.dirname(path)
    adobe_chunk = Chunk.new("/// <reference path=\"#{@package.references_path.relative_path_from(path.dirname)}\"/>")
    adobe_chunk.puts
    adobe_chunk.puts 'declare namespace Adobe {'
    namespace_chunk = Chunk.new("namespace #{@package.namespace} {")
    namespace_chunk.merge chunk.pad(1)
    namespace_chunk.puts '}'
    adobe_chunk.merge namespace_chunk.pad(1)
    adobe_chunk.puts '}'
    File.write path, adobe_chunk
  end

  def namespaced_name
    "Adobe.#{@package.namespace}.#{@name}"
  end
end
