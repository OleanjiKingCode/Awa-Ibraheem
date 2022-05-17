const sliders = document.querySelectorAll(".slide-in");
const sliders2 = document.querySelector(".slide2-in");


const appearOptions = {
    threshold: 0,
    rootMargin: "100px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });


  const appearOptions2 = {
    threshold: 0,
    rootMargin: "222500px"
  };
  
  const appearOnScroll2 = new IntersectionObserver(function(
    entries,
    appearOnScroll2
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll2.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  

 appearOnScroll2.observe(sliders2);
 


    $("#partners .owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        dots:false,
        nav:true
    });
