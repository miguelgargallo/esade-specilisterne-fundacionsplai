window.addEventListener('DOMContentLoaded', function () {
  const buttonScroll = document.querySelector('.button-scroll');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      buttonScroll.classList.add('show');
    } else {
      buttonScroll.classList.remove('show');
    }
  });

  buttonScroll.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
