$(document).ready(function () {
  'use strict';
  var search_field = $('.search-form__field'),
    search_results = $('.search-results'),
    toggle_search = $('.toggle-search-button'),
    close_search = $('.close-search-button'),
    search_result_template = "\
          <div class='search-results__item'>\
            <a class='search-results__item__title' href='{{link}}'>{{title}}</a>\
            <span class='post__date'>{{pubDate}}</span>\
          </div>";
  // Configuration
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    searchResultTemplate: '<div><a href="{url}"><h1>{title}</h1></a><span>{date}</span></div>',
    json: '/search.json'
  })

  toggle_search.click(function (event) {
    event.preventDefault();
    $('.search-form-container').addClass('is-active');

    setTimeout(function () {
      search_field.focus();
    }, 500);
  });

  $('.search-form-container').on('keyup', function (event) {
    if (event.keyCode == 27) {
      $('.search-form-container').removeClass('is-active');
    }
  });

  $('.close-search-button').click(function () {
    $('.search-form-container').removeClass('is-active');
  });

  search_field.ghostHunter({
    results: search_results,
    onKeyUp: true,
    rss: base_url + '/feed.xml',
    zeroResultsInfo: false,
    info_template: "<h4 class='heading'>Number of posts found: {{amount}}</h4>",
    result_template: searchResultTemplate,
    before: function () {
      search_results.fadeIn();
    }
  });

});