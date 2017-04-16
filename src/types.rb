module Types
  MAP = {
    '*' => 'any',
    'Array' => 'any[]',
    'ArrayCollection' => 'any[]',
    'String' => 'string',
    'Number' => 'number',
    'Boolean' => 'boolean',
    'Object' => 'any',
    'int' => 'number',
    'Class' => 'any',
    'ILogger' => 'Adobe.Flex.ILogger',
    'LogEvent' => 'Adobe.Flex.LogEvent',
    'HostObject' => 'Adobe.Flex.HostObject',
    'CSEnumSharedCache' => 'Adobe.Csawlib.CSEnumSharedCache',
    'CSHostObject' => 'Adobe.Csawlib.CSHostObject'
  }
  MAP[nil] = 'void'

  class << self
    def get(type)
      return MAP[type] || type
    end
  end
end
