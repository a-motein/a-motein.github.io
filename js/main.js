
$(document).ready(function(){

 

    // ScrollSpy JQ


    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '.navbar'
    })






    //   Section Fade Animation JQ


    AOS.init({
        offset: 120, 
        delay: 4, 
        duration: 400, 
        easing: 'ease-in-out'
    });





    // Scroll CSS Color Change JQ


      $(window).scroll(function(){

        $(".navbar-collapse, .navbar-toggler").toggleClass("scrolled-color",$(this).scrollTop()>110);

      });




    // Smooth Scroll JQ


    $(document).ready(function(){

      $("a").on('click', function(event) {
    
        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            window.location.hash = hash;
          });
        } 
      });
    });





    //   Type JQ

    var typed = new Typed('.type', {
        strings: [
            "Hello there, I am", 
            "Md. Abdul Motein"
        ],
        typeSpeed: 120,
        backSpeed: 80,
        loop: true
      });




      // Mouse Shape ScrollWheel JQ

      interval = window.setInterval(function(){
        $('.scrollwheel').animate({
          top: 14
        },400, function(){
          $('.scrollwheel').animate({
            top: 10
          },400);
        })
      },1000);




      // Progress Bar JQ


        $(window).scroll(function(){

              $('#gd').LineProgressbar({
              percentage:85,
              radius: '3px',
              height: '5px',
              fillBackgroundColor: '#10C9C3'
              });
              $('#wd').LineProgressbar({
              percentage:95,
              radius: '3px',
              height: '5px',
              fillBackgroundColor: '#10C9C3'
              });
              $('#wp').LineProgressbar({
              percentage:80,
              radius: '3px',
              height: '5px',
              fillBackgroundColor: '#10C9C3'
              });     
    
  
        });




        // MixItUp JQ Plugin 

        var containerEl = document.querySelector('.mitup');

        var mixer = mixitup(containerEl);





        // Simple LightBox JQ Plugin 

        var lightbox = new SimpleLightbox('.mix a', { 


         });





        //  Slider JQ

        $(".owl-carousel").owlCarousel({
          items:1,
          autoplay:false,
          margin:10,
          loop:true,
          responsiveClass: true,
          dots:true,
          nav:false
      });

















































});