# I wanted a Ruby plugin to call the minification code automatically whenever a post is updated.
Jekyll::Hooks.register :documents, :post_write do |doc, payload|
  if doc.output_ext() == '.html'
    cmd = 'python3 _plugins/uncss-inline.py ' + doc.destination('./')
    r = `#{cmd}`
  end
