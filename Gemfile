source "https://rubygems.org"

gem 'webrick'

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?

gem 'liquid', '>= 4.0.3'
gem 'liquid-c', '~> 4.0'
gem 'liquid-tag-parser', '~> 1.9.0'
gem 'activesupport', '~>5.2.6'
gem 'fastimage', '~> 1.6.4'
# gem "jekyll", github: "jekyll/jekyll"
# gem "sprockets"


# If you are using search search filters uncomment the line bellow.
# gem "simple_search_filter", "~> 0.2.1"

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]

# If you want to use GitHub Pages, make sure to remove the "gem 'jekyll'" and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem 'github-pages', '~> 221'
# gem 'github-pages-health-check', '~> 1.17', '>= 1.17.9'

# Plugins
group :jekyll_plugins do
    gem 'jekyll-admin'
    gem 'jekyll-commonmark'
    gem 'jekyll-analytics'
    gem 'jekyll-include-cache'
    gem 'jekyll-toc'
    gem 'jekyll-menus'
    gem 'jekyll-picture-tag', '~> 0.3.0'
#   gem 'jekyll-assets', '~> 3.0.12'
end

# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
    gem 'tzinfo'
end
gemspec
