
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it out */
      if (objectBottom < windowBottom) { //object comes out of view (scrolling down)
        if ($(this).css("opacity")==1) {
          $(this).fadeTo(150,0);
          $(".sidebar").fadeTo(150,1);
        }
      } else { //object goes into view (scrolling up)
        if ($(this).css("opacity")==0) {
          $(this).fadeTo(150,1);
          $(".sidebar").fadeTo(150,0);
        }
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


//fade in for contents

// $(function(){  // $(document).ready shorthand
//   $('#proj1').fadeIn('slow');
// });

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.fade_in').each( function(i){

            var bottom_of_object = $(this).position().top + 80;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});
