# [Tech-blog](https://github.com/alainQtec/tech-blog)

[![Jekyll site CI](https://github.com/alainQtec/tech-blog/actions/workflows/jekyll.yml/badge.svg)](https://github.com/alainQtec/tech-blog/actions/workflows/jekyll.yml)
[![license](https://img.shields.io/github/license/kitian616/jekyll-TeXt-theme.svg)](https://github.com/kitian616/jekyll-TeXt-theme/blob/master/LICENSE)
[![Gem Version](https://img.shields.io/gem/v/jekyll-text-theme.svg)](https://github.com/kitian616/jekyll-TeXt-theme/releases)
[![Travis](https://img.shields.io/travis/alainQtec/tech-blog.svg)](https://app.travis-ci.com/alainQtec/tech-blog)
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-1462ab.svg?logo=paypal)](https://www.paypal.me/kitian616)
[![Tip Me via Bitcoin](https://img.shields.io/badge/Bitcoin-tip%20me-f7931a.svg?logo=bitcoin)](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/docs/assets/images/3Fkufxcw2xd8HnaRJBNK4ccdtkUDyyNu4V.jpg)

![TeXt Theme](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/TeXt-home.jpg)

![TeXt Theme Details](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/TeXt-layouts.png)

#

## Personal blog & Portfolio site

[![Deploy to `Github Pages`](https://github.com/alainQtec/alainQtec.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/alainQtec/alainQtec.github.io/actions/workflows/deploy.yml)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

### **Launch the local Site**

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

Depending on which version of jekyll you'll be using you may face issues with dependencies and plugins.

If this happens you'll have to troubleshoot that first. You can refer to these links:

[Fix netlify CMS Authentication problem](https://github.com/netlify/netlify-cms/issues/1474) and [Fix Jekyll menus issue: double-splats for hash parameters error](https://github.com/forestryio/jekyll-menus/commit/6c8b53eeb0d4b58743fb6461aa94d84004c8a35d).

Then Start the server locally at <http://127.0.0.1:4000/> or <http://localhost:4000/> :

```bash
cd Project_repo
bundle exec jekyll serve --watch
```

#### Features

- Responsive
- Semantic HTML
- Skins
- Highlight Theme
- Internationalization
- Search
- Table of contents
- Authors
- Additional styles (alert, tag, image, icon, button, grid, etc)
- Extensions (audios, videos, slides, demos)
- Markdown enhancements ([MathJax](https://www.mathjax.org/), [mermaid](https://mermaidjs.github.io/), [chartjs](http://www.chartjs.org/))
- Sharing ([AddToAny](https://www.addtoany.com/), [AddThis](https://www.addthis.com/))
- Comments ([Disqus](https://disqus.com/), [Gitalk](https://gitalk.github.io/), [Valine](https://valine.js.org/en/))
- Pageview ([LeanCloud](https://leancloud.cn/))
- Analytics ([Google Analytics](https://analytics.google.com/analytics/web/))
- RSS ([jekyll-feed](https://github.com/jekyll/jekyll-feed))
- Continuous deployment with [`github actions`](https://github.com/features/actions).
- Local CMS Admin using [`Jekyll Admin`](https://jekyll.github.io/jekyll-admin/).
- Onine CMS Admin using [`Forestry`](https://app.forestry.io/dashboard/#) a Git-backed CMS.
- Using Latest [`Jekyll` 4.x](https://jekyllrb.com) and [`Bundler`](https://bundler.io).
- Stylesheet built using Sass
- Comments using [`Hyvor`](https://talk.hyvor.com/) and [`Disqus`](https://disqus.com/).<!-- - SEO-optimized. -->
- Real Time site Search - [`Algolia`](https://www.algolia.com/).
- Selling Stuff (Ecommerce) using [`Snipcart`](https://snipcart.com/).
- Send Newsletters using [`Mailchimp`](https://mailchimp.com/).
- Contact Forms Support for [`Getform`](https://getform.io), [`Formspree`](https://formspree.io/).
- Coding Activity using [`Wakatime`](https://wakatime.com/).
- Hosting Support for [`Github Pages`](https://pages.github.com), [`Netlify`](https://netlify.com), [`Vercel`](https://vercel.com), [`Heroku`](https://heroku.com), [`AWS Amplify`](aws.amplify.com), [`Firebase`](https://firebase.com).
<!-- - [Buddy](https://buddy.works/) , [`Circle CI`](https://circleci.com/) -->

#### **Backend using Jekyll Admin**

I manage the site locally using [`Jekyll Admin`](https://jekyll.github.io/jekyll-admin/) : [http://localhost:4000/admin](http://localhost:4000/admin)

But if thats does not work out, (Plan-B) I use CMS.cmd from my terminal <!-- This script should be smart enough to fix any errors in the Backend, and Quickly open the CMS -->

```batch
cd Project_repo/Admin
cms
```

## Skins

TeXt has 6 built-in skins, you can also set up your own skin.

| `default` | `dark` | `forest` |
| --- |  --- | --- |
| ![Default](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_default.jpg) | ![Dark](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_dark.jpg) | ![Forest](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_forest.jpg) |

| `ocean` | `chocolate` | `orange` |
| --- |  --- | --- |
| ![Ocean](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_ocean.jpg) | ![Chocolate](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_chocolate.jpg) | ![Orange](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_orange.jpg) |

### Highlight Theme

TeXt use [Tomorrow](https://github.com/chriskempson/tomorrow-theme) as the highlight theme.

| `tomorrow` | `tomorrow-night` | `tomorrow-night-eighties` | `tomorrow-night-blue` | `tomorrow-night-bright` |
| --- |  --- | --- | --- |  --- |
| ![Tomorrow](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/highlight_tomorrow.png) | ![Tomorrow Night](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/highlight_tomorrow-night.png) | ![Tomorrow Night Eighties](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/highlight_tomorrow-night-eighties.png) | ![Tomorrow Night Blue](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/highlight_tomorrow-night-blue.png) | ![Tomorrow Night Bright](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/highlight_tomorrow-night-bright.png) |

## Documentation

### Start

- [Quick Start](https://tianqi.name/jekyll-TeXt-theme/docs/en/quick-start)
- [Update from 1.x to 2.x](https://tianqi.name/jekyll-TeXt-theme/docs/en/update-from-1-to-2)

### Customization

- [Configuration](https://tianqi.name/jekyll-TeXt-theme/docs/en/configuration)
- [Navigation](https://tianqi.name/jekyll-TeXt-theme/docs/en/navigation)
- [Layouts](https://tianqi.name/jekyll-TeXt-theme/docs/en/layouts)
- [Logo and Favicon](https://tianqi.name/jekyll-TeXt-theme/docs/en/logo-and-favicon)
- [Authors](https://tianqi.name/jekyll-TeXt-theme/docs/en/authors)
- [Internationalization](https://tianqi.name/jekyll-TeXt-theme/docs/en/i18n)

### Content

- [Writing Posts](https://tianqi.name/jekyll-TeXt-theme/docs/en/writing-posts)
- [Additional styles](https://tianqi.name/jekyll-TeXt-theme/docs/en/additional-styles)
- [Extensions](https://tianqi.name/jekyll-TeXt-theme/docs/en/extensions)
- [Markdown Enhancements](https://tianqi.name/jekyll-TeXt-theme/docs/en/markdown-enhancements)

## Demo Pages

| Name | Description |
| --- | --- |
| [Home](https://tianqi.name/jekyll-TeXt-theme/test/) | Home page |
| [Archive](https://tianqi.name/jekyll-TeXt-theme/archive.html) | Archive page |
| [Layout Examples](https://tianqi.name/jekyll-TeXt-theme/samples.html) | Examples for different layouts |

## License

[Apache License](https://github.com/alaintec/tech-blog/blob/main/LICENSE).
