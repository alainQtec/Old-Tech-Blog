function openModal() {
  const modalTrigger = document.querySelectorAll('.modal-trigger');
  modalTrigger.forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      const target = this.getAttribute('href').substr(1);
      const modalWindow = document.getElementById(target);

      if (modalWindow.classList) {
        modalWindow.classList.add('open');
      }

      event.preventDefault();
    });
  });
}
function closepaModal() {
  $(document).ready(function () {
    $(".close_model").on("click", function () {
      if ($('#textbox1').val() == 'true') {
        $('.modal-close').trigger('click');
        modalWindow.forEach((modalWindow) => {
          modalWindow.classList.remove('open')
        });
      } else {
        alert('pls click on checkbox');
      }
    });
    $('.one').change(function () {
      if (this.checked) {
        $(this).prop("checked", 'true');
      }
      $('#textbox1').val(this.checked);
    });
  });
}
function fireWhenReady(func) {
  document.addEventListener('DOMContentLoaded', func);
}
fireWhenReady(openModal);
fireWhenReady(closepaModal);