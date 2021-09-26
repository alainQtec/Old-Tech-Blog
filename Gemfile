source "https://rubygems.org"

gem 'webrick'

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?
gem "sprockets", "~> 3.7"

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]

# If you want to use GitHub Pages, make sure to remove the "gem 'jekyll'" and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins

# Plugins
group :jekyll_plugins do
    gem 'jekyll-admin'
end

# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
end
gemspec
