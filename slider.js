document.addEventListener('DOMContentLoaded', function () {
  const pageLoader = document.getElementById('pageLoader');
  const scrollTopButton = document.getElementById('scrollTop');
  const navbar = document.querySelector('.navbar');

  window.setTimeout(function () {
    if (pageLoader) {
      pageLoader.classList.add('page-loader-hidden');
    }
    document.body.classList.remove('loading');
  }, 2400);

  AOS.init({
    once: true,
    duration: 1000,
    easing: 'ease-out-cubic'
  });

  if (document.querySelector('.hero-slider')) {
    new Swiper('.hero-slider', {
      loop: true,
      speed: 1400,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: '.hero-slider .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.hero-slider .swiper-button-next',
        prevEl: '.hero-slider .swiper-button-prev',
      },
      keyboard: {
        enabled: true,
      },
    });
  }

  if (document.querySelector('.testimonial-slider')) {
    new Swiper('.testimonial-slider', {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: '.testimonial-slider .swiper-pagination',
        clickable: true,
      },
    });
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 320) {
      scrollTopButton?.classList.add('visible');
    } else {
      scrollTopButton?.classList.remove('visible');
    }

    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }
  });

  scrollTopButton?.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
