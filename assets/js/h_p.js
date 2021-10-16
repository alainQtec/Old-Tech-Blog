/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('h-navbar-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.home__nav__link')

function linkAction() {
  const navMenu = document.getElementById('h-navbar-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

  (function ($) {
    "use strict";

    $(function () {
      var header = $(".start-style");
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
          header.removeClass('start-style').addClass("scroll-on");
        } else {
          header.removeClass("scroll-on").addClass('start-style');
        }
      });
    });

    //Animation

    $(document).ready(function () {
      $('h1.name-anime').removeClass('name-anime');
    });
  });

jQuery(function ($) {
  $('#home__navbar').scrollAway();
  $('#blognavbrand').scrollAway();
});

// var prevScrollpos = window.pageYOffset;
//     window.onscroll = function () {
//       var currentScrollPos = window.pageYOffset;
//       if (prevScrollpos > currentScrollPos) {
//         document.getElementById("home__navbar").style.top = "0";
//       } else {
//         document.getElementById("home__navbar").style.top = "-50px";
//       }
//       prevScrollpos = currentScrollPos;
// }

/*==================== ACCORDION SKILLS ====================*/
const skillContent = document.getElementById('skills__content'),
  skillHeader = document.getElementById('skills__header')

function toggleSkills() {
  let itemClass = this.parentNode.ClassName

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }

  if (itemClass === 'skillsContent skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((eL) => {
  eL.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')
    tab.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__acrive')
  })
})
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})
/*==================== project SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/
// let swiperTestimonial = new Swiper('.testimonial__container', {
//   loop: true,
//   grabCursor: true,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('home')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.home__navbar__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.home__navbar__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*============================ SCROLL REVEAL ANIMATION ==========================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/*SCROLL HOME*/
sr.reveal('.homepage__title', {})
sr.reveal('.home__scroll', { delay: 200 })
sr.reveal('.homepage__img', { origin: 'right', delay: 400 })

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 500 })
sr.reveal('.about__subtitle', { delay: 300 })
sr.reveal('.about__profession', { delay: 400 })
sr.reveal('.about__text', { delay: 500 })
sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.skills__img', { delay: 400 })

/*SCROLL PORTFOLIO*/
sr.reveal('.project__img', { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 200 })
sr.reveal('.contact__input', { delay: 400 })
sr.reveal('.contact__button', { delay: 600 })