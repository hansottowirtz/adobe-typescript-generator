class Documentable
  def doc
    Doc.generate(@description, @summary, doc_tags)
  end

  def doc_tags
    []
  end
end
