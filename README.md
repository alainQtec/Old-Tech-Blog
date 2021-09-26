# [Tech-blog](https://github.com/alainQtec/tech-blog)

[![Jekyll site CI](https://github.com/alainQtec/tech-blog/actions/workflows/jekyll.yml/badge.svg)](https://github.com/alainQtec/tech-blog/actions/workflows/jekyll.yml)
[![Travis](https://img.shields.io/travis/alainQtec/tech-blog.svg)](https://app.travis-ci.com/alainQtec/tech-blog)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-1462ab.svg?logo=paypal)](https://www.paypal.me/kitian616)

### **Backend**

I manage the site locally using [`Jekyll Admin`](https://jekyll.github.io/jekyll-admin/) : [http://localhost:4000/admin](http://localhost:4000/admin)

or when I'm not on my PC I use [`Foresty Admin`](https://app.forestry.io/dashboard/#) : [https://alainqtec.com/admin](/admin)

Prerequisites:

```sh
cd Project_repo
ruby -v
gem install bundler
bundler -v
bundle add jekyll
bundle exec jekyll -v
bundle update
bundle install
```

But if thats does not work out, (Plan-B) I use cms.cmd from my terminal <!-- This script should be smart enough to fix any errors in the Backend, and Quickly open the CMS -->

```batch
cd Project_repo/Admin
cms
```

Depending on which version of jekyll you'll be using you may face issues with dependencies and plugins.

If this happens you'll have to troubleshoot that first. You can refer to these links:

[Fix netlify CMS Authentication problem](https://github.com/netlify/netlify-cms/issues/1474) and [Fix Jekyll menus issue: double-splats for hash parameters error](https://github.com/forestryio/jekyll-menus/commit/6c8b53eeb0d4b58743fb6461aa94d84004c8a35d).

Then Start the server locally at <http://127.0.0.1:4000/> or <http://localhost:4000/> :

```bash
cd Project_repo
bundle exec jekyll serve --watch
```

### Features

This is a personnal project so features are always changing.

[TODO](TODO.md)

### License [![license](https://img.shields.io/github/license/alainQtec/tech-blog.svg)](https://github.com/alainQtec/tech-blog/blob/main/LICENSE)

This blog uses [Apache License](https://github.com/alainQtec/tech-blog/blob/main/LICENSE).
