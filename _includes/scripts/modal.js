const modalTrigger = document.querySelectorAll('.modal-trigger');
const closeBtns = document.querySelectorAll('.modal-close');

function openModal() {
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

function closeModal() {
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