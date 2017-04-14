module Util
  class << self
    def extract_type(a, org_type)
      href = a['href']
      md = href.match /(?:\.\.\/)+com\/adobe\/([\w\/]+)\/#{org_type}.html/
      namespaces = md[1].split('/').collect(&:capitalize).join
      "Adobe.#{namespaces}.#{org_type}"
    end
  end
end
