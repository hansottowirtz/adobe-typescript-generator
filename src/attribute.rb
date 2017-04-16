class Attribute < Documentable
  attr_reader :name
  attr_reader :kind
  attr_reader :readonly
  attr_reader :description
  attr_reader :type
  attr_reader :override
  attr_reader :static
  attr_reader :arguments

  def initialize(name, kind, readonly, description, type, override, static, access_modifier, arguments)
    @name = name
    @kind = kind
    @readonly = readonly
    @description = description
    @type = type
    @override = override
    @static = static
    @access_modifier = access_modifier
    @arguments = arguments
  end

  def property?
    @kind == 'property'
  end

  def method?
    @kind == 'method' || @kind == 'constructor'
  end

  def constructor?
    @kind == 'constructor'
  end

  def constant?
    @kind == 'constant'
  end

  def flash_proxy?
    @access_modifier == 'flash_proxy'
  end

  def public?
    @access_modifier == 'public'
  end

  def protected?
    @access_modifier == 'protected'
  end

  def declaration
    c = Chunk.new
    if property?
      c.print(if flash_proxy? then 'public' else @access_modifier || 'public' end)
      c.print ' '
      c.print "static " if @static
      c.print "readonly " if @readonly
      c.print @name
      c.print ': '
      c.print @type
      c.print ';'
    elsif method?
      c.print(if flash_proxy? then 'public' else @access_modifier || 'public' end)
      c.print ' '
      c.print(if constructor? then 'constructor' else @name end)
      c.print '('
      c.print @arguments.collect(&:to_s).join(", ")
      c.print ')'
      if !constructor?
        c.print ': '
        c.print @type
      end
      c.print ';'
    elsif constant?
      c.print "public static readonly #{@name}: any;"
    end
    c
  end

  def doc_tags
    if method? then @arguments.collect(&:doc_tag) else [] end
  end

  def chunk
    Chunk.join(doc, declaration)
  end

  def const_chunk
    Chunk.join(doc, "const #{@name}: #{@type};")
  end
end
