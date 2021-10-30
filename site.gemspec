# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-tech-blog"
  spec.version       = "1.0"
  spec.authors       = ["Alain Herve"]
  spec.email         = ["alain.1337dev@outlook.com"]

  spec.summary       = %q{personal site and blog project.}
  spec.homepage      = "https://github.com/alainQtec/tech-blog"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_data|_includes|_layouts|_sass|assets)/|(LICENSE|README|CHANGELOG)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.9.0"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.1"
  spec.add_runtime_dependency "mini_magick", "~> 3.8.1"
  spec.add_runtime_dependency "subexec", "~> 0.2.3"
  spec.add_runtime_dependency "sassc", "~> 2.4"
  spec.add_runtime_dependency "jemoji"
  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "ffi", "~> 1.15", ">= 1.15.4"
end
