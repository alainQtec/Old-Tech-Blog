# [Tech-blog](https://github.com/alainQtec/tech-blog)

<a href="https://github.com/alainQtec"><sub>My Github<sub> <img src="https://komarev.com/ghpvc/?username=alainQtec&label=Profile%20views&color=0e75b6&style=flat" alt="alainQtec" /> </p>

[![Travis](https://img.shields.io/travis/alainQtec/tech-blog.svg)](https://app.travis-ci.com/alainQtec/tech-blog)
<!-- [![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-1462ab.svg?logo=paypal)](https://www.paypal.me/alainQtec) -->

This is an old blog, it works but Its a pain to mainain  so I'll have to [migrate to 11nty](https://www.jasha.eu/blogposts/2020/06/migration-from-jekyll-to-eleventy.html)

Local admin uses [`Jekyll Admin`](https://jekyll.github.io/jekyll-admin/)

or when I'm not on my PC I use [`Forestry Admin`](https://app.forestry.io/dashboard/#) : [https://alainqtec.com/admin](https://alainqtec.com/admin)

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

Depending on which version of jekyll used there may be issues with dependencies and plugins.

If this happens, troubleshooting comes first. 

Some Netlify CMS common errors include:

[Fix netlify CMS Authentication problem](https://github.com/netlify/netlify-cms/issues/1474) and [Fix Jekyll menus issue: double-splats for hash parameters error](https://github.com/forestryio/jekyll-menus/commit/6c8b53eeb0d4b58743fb6461aa94d84004c8a35d).

Then Start the server locally at <http://127.0.0.1:4000/> or <http://localhost:4000/> :

```bash
cd Project_repo
bundle exec jekyll serve --watch
```

### [![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/alainQtec/tech-blog/blob/main/LICENSE)

This blog uses [GPL-3.0 License](https://github.com/alainQtec/tech-blog/blob/main/LICENSE).
