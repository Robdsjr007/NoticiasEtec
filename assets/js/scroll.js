<<<<<<< HEAD
  window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.scroll-top');
=======
  const scrollButton = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', function() {
>>>>>>> cc0487bc789c06437798c5091d43ee63325f276f
    if (window.pageYOffset > 200) {
      scrollButton.classList.add('show-scroll');
    } else {
      scrollButton.classList.remove('show-scroll');
    }
  });
<<<<<<< HEAD


  


 
=======
 
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
>>>>>>> cc0487bc789c06437798c5091d43ee63325f276f


