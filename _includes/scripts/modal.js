function openModal() {
  let modalTrigger = document.querySelectorAll('.modal-trigger');

  modalTrigger.forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      // remove "#" from #modal
      const target = this.getAttribute('href').substr(1);
      const modalWindow = document.getElementById(target);

      if (modalWindow.classList) {
        modalWindow.classList.add('open');
      }

      event.preventDefault();
    });
  });
}

function closeModal() {
  let closeBtns = document.querySelectorAll('.modal-close');
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalWindow.forEach((modalWindow) => {
        modalWindow.classList.remove('open')
      });
    });
  });
}

function fireWhenReady(func) {
  document.addEventListener('DOMContentLoaded', func);
}

fireWhenReady(openModal);
fireWhenReady(closeModal);