root = File.expand_path('..', __dir__)
Dir["#{root}/types/namespaces/*/index.d.ts"].each do |path|
  puts %x(tsc #{path})
end
