const menuBtn=document.getElementById("menu");
const linkEls=document.getElementById("link");
menuBtn.addEventListener("clik",function(){
    linkEls.classList.toggle("show");
})



  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetElement = document.querySelector(this.getAttribute('href'));
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Adjust this value to control the duration of scrolling
  
      let start = null;
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * percentage);
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }
      requestAnimationFrame(step);
    });
  });