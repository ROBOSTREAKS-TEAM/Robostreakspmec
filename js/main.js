$(document).ready(function() {

    //sticky header
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
          $(".header-area").addClass("sticky");
        } else {
          $(".header-area").removeClass("sticky");
        }
    
        // Update the active section in the header
        updateActiveSection();
      });
    

    });
    
  
   