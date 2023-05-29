  const scrollButton = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
      scrollButton.classList.add('show-scroll');
    } else {
      scrollButton.classList.remove('show-scroll');
    }
  });
 
  function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 10);
    }
  }

  scrollButton.addEventListener('click', function() {
    scrollToTop();
  });


