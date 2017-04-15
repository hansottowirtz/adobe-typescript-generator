require 'test/unit'

class DtsTest < Test::Unit::TestCase
  def test_tsc
    root = File.expand_path('..', __dir__)
    Dir["#{root}/types/namespaces/*/index.d.ts"].each do |path|
      o = %x(tsc #{path})
      assert(o == '', "Error in #{path}:\n#{o}")
    end
  end
end
