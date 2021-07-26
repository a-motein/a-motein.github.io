
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


    $(document).ready(function(){
      // Add smooth scrolling to all links
      $(".nav-link").on('click', function(event) {
    
        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1200, function(){
       
            window.location.hash = hash;
          });
        } 
      });
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