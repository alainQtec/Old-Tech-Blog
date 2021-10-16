  $(document).ready(function () {
    'use strict';
    var search_field = $('.search-form__field'),
      search_results = $('.search-results'),
      toggle_search = $('.toggle-search-button'),
      close_search = $('.close-search-button');
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

    close_search.click(function () {
      $('.search-form-container').removeClass('is-active');
    });

    var search_data = [
      
        {
      "title": "Quick guide to using ADB Platform Tools",
      "category": "it-ops",
      "tags": "",
      "url": "https://www.alainqtec.com/blog/guide-to-using-adb-platform-tools",
      "date": "2021-09-25 00:00:00 +0200",
      "thumbnail": "https://www.alainqtec.com/assets/img/posts/pexels-pixabay-270557.jpeg",
      "description": "Learn how to use adb to uninstall packages"
        } , 
    
        {
      "title": "Install Windows Drivers using powershell",
      "category": "it-ops",
      "tags": "",
      "url": "https://www.alainqtec.com/blog/install-windows-drivers-using-powershell",
      "date": "2021-09-25 00:00:00 +0200",
      "thumbnail": "https://www.alainqtec.com/assets/img/posts/pexels-luis-gomes-546819.jpg",
      "description": "Learn how to fix and install drivers using poweshell"
        } , 
    
        {
      "title": "Basic Networking with PowerShell",
      "category": "it-ops",
      "tags": "",
      "url": "https://www.alainqtec.com/blog/basic-networking-with-powershell",
      "date": "2021-08-30 06:57:23 +0200",
      "thumbnail": "https://www.alainqtec.com/assets/img/posts/powershell.jpeg",
      "description": "Get started on how to use powershell with networking"
        } , 
    
        {
      "title": "How to use PowerShell for easier remote management",
      "category": "it-ops",
      "tags": "",
      "url": "https://www.alainqtec.com/blog/powershell-for-easier-remote-management",
      "date": "2021-08-26 12:02:43 +0200",
      "thumbnail": "https://www.alainqtec.com/assets/img/posts/programming_evolution.jpeg",
      "description": "Learn cool ways to use powershell for remote managment."
        } , 
    
        {
      "title": "Windows 10 password reset utilities",
      "category": "it-ops",
      "tags": "",
      "url": "https://www.alainqtec.com/blog/password-reset-utilities",
      "date": "2021-08-25 19:15:49 +0200",
      "thumbnail": "https://www.alainqtec.com/assets/img/posts/troubleshoot.jpeg",
      "description": "Learn how to use lifesaver password reset utilities for windows pc"
        } , 
    
        {
      "title": "How to reset an active directory (AD) account password with PowerShell",
      "category": "it-ops",
      "tags": "",
      "url": "https://www.alainqtec.com/blog/reset-active-directory-password",
      "date": "2021-08-20 12:03:43 +0200",
      "thumbnail": "https://www.alainqtec.com/assets/img/posts/code.jpeg",
      "description": "Learn several possibilities of how you can reset an AD account Password."
        } 
    
]

    $('#search-input').keyup(function () {
      var searchField = $(this).val();
      if (searchField === '') {
        $('#filter-records').html('');
        return;
      }
      var regex = new RegExp(searchField, "i");
      var output = '<div class="search-results">';
      var count = 1;
      $.each(search_data, function (key, val) {
        if ((val.url.search(regex) != -1) || (val.title.search(regex) != -1)) {
          output += '<div class="sr_card result_item" style="--search-bg-img: url(' + val.thumbnail + ')">';
          output += '<div class="search_content">';
          output += '<h5 class="searchr_title">' + val.title + '</h5>';
          output += '<p class="searchr_descr">' + val.description + '</p>';
          output += '<button class="btn"><a href="' + val.url + '" target="_blank" rel="noopener noreferrer">Read more</a></button>';
          output += '</div>';
          output += '</div>';
          if (count % 2 == 0) {
            output += '</div><div class="sr_card_out">'
          }
          count++;
        }
      });
      output += '</div>';
      $('#filter-records').html(output);
    });
    // search_results.fadeIn();

  });