module Util
  class << self
    def extract_type_from_a(a, org_type, package_name = nil)
      href = a['href']
      md = href.match /(?:(?:\.\.\/)+com\/adobe\/([\w\/]+)\/)?#{org_type}.html(?:#(?:\w+))?/
      if md[1]
        namespaces = md[1].split('/').collect(&:capitalize).join
      else
        namespaces = package_name.match(/com.adobe.(.+)/)[1].split('.').collect(&:capitalize).join
      end
      "Adobe.#{namespaces}.#{org_type}"
    end

    def extract_type_from_dots(text)
      if md = text.match(/com\.adobe\.([\w\.]+)\.(\w+)/)
        namespaces = md[1].split('.').collect(&:capitalize).join
        "Adobe.#{namespaces}.#{md[2]}"
      elsif md = text.match(/(flash|mx)\.([\w\.]+)\.(\w+)/)
        namespaces = md[2].split('.').collect(&:capitalize).join('.')
        "Adobe.#{md[1].capitalize}.#{namespaces}.#{md[3]}"
      else
        Types.get(text)
      end
    end
  end
end
