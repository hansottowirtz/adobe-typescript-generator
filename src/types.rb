module Types
  class << self
    def get(type)
      map = {
        '*' => 'any',
        'Array' => 'any[]',
        'ArrayCollection' => 'any[]',
        'String' => 'string',
        'Number' => 'number',
        'Boolean' => 'boolean',
        'Object' => 'any',
        'int' => 'number',
        'Class' => 'any'
      }
      map[nil] = 'void'
      return map[type] || type
    end
  end
end
