![Version](https://img.shields.io/badge/Version-0.6.0-blue.svg)
![MinGhostVersion](https://img.shields.io/badge/Min%20Ghost%20v.-%3E%3D%202.10-red.svg)

# ghostHunter

**Original developer:** [jamal@i11u.me](mailto:jamal@i11u.me)

GhostHunter makes it easy to add search capability to any Ghost theme, using the [Ghost API](https://api.ghost.org/v1.14.0/docs) and the [lunr.js](https://lunrjs.com) search engine. Indexing and search are done client-side (in the browser). This has several advantages:

* Searches are private to the user, and are not exposed to third parties.
* Installation and maintenance of powerful-but-daunting standalone search engines (such as [Solr](http://lucene.apache.org/solr/) or [ElasticSearch](https://www.elastic.co/)) is not required.
* Instant search ("search-as-you-type" or "typeahead") is simple to configure.

-----------------

## Contents

   * [ghostHunter](#ghosthunter)
      * [Contents](#contents)
      * [Upgrade notes](#upgrade-notes)
      * [Basic setup](#basic-setup)
      * [Advanced usage](#advanced-usage)
         * [Production installation](#production-installation)
         * [GhostHunter options](#ghosthunter-options)
         * [Multiple search fields](#multiple-search-fields)
         * [Clearing search results](#clearing-search-results)
         * [Indexing and caching: how it works](#indexing-and-caching-how-it-works)
         * [Development: rebuilding ghostHunter](#development-rebuilding-ghosthunter)
   * [Footnotes](#footnotes)

------------------

## Upgrade notes
### GhostHunter v0.6.0

* Implements @JiapengLi "dirty fix" to support the new Ghost v2 Content API.
* Removes spurious production console.log message.
* Removes `includepages` option.


To use this version of ghostHunter, you'll need to create a Custom Integration and inject its Content API key into your blog header. In your Ghost Settings:

>> read more online ....