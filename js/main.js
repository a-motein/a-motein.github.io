
$(document).ready(function(){

 

    // ScrollSpy JS 


    $('body').scrollspy({
      target: '.navbar',
      offset: 10
    });






    //   Section Fade Animation 


    AOS.init({
        offset: 120, 
        delay: 0, 
        duration: 400, 
        easing: 'ease-in-out'
    });





    // Scroll CSS Color Change 


      $(window).scroll(function(){

        $(".navbar-collapse, .navbar-toggler").toggleClass("scrolled-color",$(this).scrollTop()>110);

      });




    // Smooth Scroll 


    $(".nav-link").on('click', function(scrollY) {

        if (this.hash !== "") {

          scrollY.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1200, function(){
    
            window.location.hash = hash;
          });
        } 
      });





    //   Type JS 

    var typed = new Typed('.type', {
        strings: [
            "Hello there, I am", 
            "Md. Abdul Motein"
        ],
        typeSpeed: 120,
        backSpeed: 80,
        loop: true
      });




      // Mouse Shape ScrollWheel 

      interval = window.setInterval(function(){
        $('.scrollwheel').animate({
          top: 14
        },400, function(){
          $('.scrollwheel').animate({
            top: 10
          },400);
        })
      },1000);




      // Progress Bar 


        $(window).scroll(function(){

              $('#gd').LineProgressbar({
              percentage:85,
              radius: '3px',
              height: '5px',
              fillBackgroundColor: '#C98192'
              });
              $('#wd').LineProgressbar({
              percentage:95,
              radius: '3px',
              height: '5px',
              fillBackgroundColor: '#C98192'
              });
              $('#wp').LineProgressbar({
              percentage:80,
              radius: '3px',
              height: '5px',
              fillBackgroundColor: '#C98192'
              });     
    
  
        });




        // MixItUp JQ Plugin 

        var containerEl = document.querySelector('.mitup');

        var mixer = mixitup(containerEl);



        // Simple LightBox JQ Plugin 

        var lightbox = new SimpleLightbox('.mix a', { 


         });




        //  Load More Button JS

        // $('.mix').slice(0, 5).show();
        
        // $('.loadMore').on('click', function(){

        //   $('.mix:hidden').slice(0, 5).show();

        //   if($('.mix:hidden').length==0);

        //   {
        //     $('.loadMore').fadeOut();
        //   }

        // });











































});