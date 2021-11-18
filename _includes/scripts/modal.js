$(document).ready(function () {
  $(".modal-cancel").on("click", function () {
    if ($('#useragreemInput').val() == 'true') {
      $('.modal-close').trigger('click');
    } else {
      alert('pls click on checkbox');
    }
  });
  $('.one').change(function () {
    if (this.checked) {
      $(this).prop("checked", 'true');
    }
    $('#useragreemInput').val(this.checked);
  });
});