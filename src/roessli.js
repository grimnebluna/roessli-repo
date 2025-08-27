
  /* anmeldeformular functions */
  
  
    function rmydays(date) {
    //console.log('Jahr:' + date.getFullYear() + 'monat:' + date.getMonth() + 'tag:' + date.getDate());
        return (date.getDay() === 2 || date.getDay() === 3 );
    }
    function rmySpecificdays(date) {
        const rdatedData = ["2023-12-23", "2023-12-24", "2023-12-25", "2023-12-26",
        "2024-01-07", "2024-01-08", "2024-01-09", "2024-01-10",
        "2024-01-11", "2024-01-12", "2024-01-13", "2024-01-14",
        "2024-01-15", "2024-01-16", "2024-01-17", "2024-01-18",
        "2024-01-19", "2024-01-20", "2024-01-21", "2024-01-22",
        "2024-01-23", "2024-01-24", "2024-01-25", "2024-01-26",
        "2024-01-27", "2024-01-28", ];
        return rdatedData.includes(date.toISOString().substring(0, 10));
    }
  
  
// translation functions



const transstr = jQuery('body').attr("translation");
var languagest = 'de';
var languagealt = 'en';
  
if (transstr && transstr !== "") {

 if( jQuery('body').attr("lang") == 'en') {

  if(transstr == '/') {
    const currentParams = window.location.search;
    const notDetectionParam = currentParams ? currentParams + '&notdetection=1' : '?notdetection=1';
    const newHref = '/' + notDetectionParam;
    
	jQuery('.deenlink.de').attr('href', newHref);
	jQuery('.deenlinkoverlay.de').attr('href', newHref);

  } else {
    const currentParams = window.location.search;
    const transstrWithParams = transstr + currentParams;

	jQuery('.deenlink.de').attr('href', transstrWithParams);
	jQuery('.deenlinkoverlay.de').attr('href', transstrWithParams);

  }

	jQuery('.deenlink.en').attr('href', window.location.href);
	jQuery('.deenlinkoverlay.en').attr('href', window.location.href);
	jQuery('.deenlink.en').addClass('curr');
	jQuery('.deenlinkoverlay.en').addClass('curr');
   	languagest = 'en';
    languagealt = 'de';
 } else {
   

    const currentParams = window.location.search;
    const transstrWithParams = transstr + currentParams;
	jQuery('.deenlink.en').attr('href', transstrWithParams);
	jQuery('.deenlinkoverlay.en').attr('href', transstrWithParams);
	jQuery('.deenlink.de').attr('href', window.location.href);
	jQuery('.deenlinkoverlay.de').attr('href', window.location.href);
	jQuery('.deenlink.de').addClass('curr');
	jQuery('.deenlinkoverlay.de').addClass('curr');
 }
  

        var newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('http-equiv', 'content-language');
        newMetaTag.content = languagest;
        document.head.appendChild(newMetaTag);
      
  

        var newLinkTag = document.createElement('link');
        newLinkTag.setAttribute('rel', 'alternate');
        newLinkTag.setAttribute('hreflang', languagest);
        newLinkTag.href = window.location.href;
        document.head.appendChild(newLinkTag);
      

        var newLinkZweiTag = document.createElement('link');
        newLinkZweiTag.setAttribute('rel', 'alternate');
        newLinkZweiTag.setAttribute('hreflang', languagealt);
        newLinkZweiTag.href = 'https://www.roessli.ch' + transstr;
        document.head.appendChild(newLinkZweiTag);
      


} else {

  if(jQuery('body').attr("lang") == 'en') {
    jQuery('.deenlink.de').hide();
    jQuery('.deenlinkoverlay.de').hide();
    jQuery('.deenlink.en').attr('href', window.location.href);
    jQuery('.deenlinkoverlay.en').attr('href', window.location.href);


  } else {
    jQuery('.deenlink.en').hide();
    jQuery('.deenlinkoverlay.en').hide();
    jQuery('.deenlink.de').attr('href', window.location.href);
    jQuery('.deenlinkoverlay.de').attr('href', window.location.href);


  }



}

// translation functions
  
  
  
    

  /* galerie */
   var shortestImageHeight = 0;

$( window ).on( "resize", function() {

 var shortestImageHeight = 0;
} );


  /* / galerie */

  function attbgposition() {

var half = $('#attbg').height() / 2.95;
var scrolledY = $(window).scrollTop() - half;
if($('#attbg').height() < ($('#attbg').width() / 2)) {
$('#attbg').css('background-position', 'left ' + ((scrolledY)) + 'px');
} else {

$('#attbg').css('background-position', 'center center');
}

}

$(window).scroll(attbgposition);
$( window ).on( "resize", attbgposition);

$(window).scroll(function() {
  // Calculate how far the user has scrolled from the bottom of the page
  var scrollFromBottom = $(document).height() - $(window).scrollTop() - $(window).height();
  
  // Check if the user has scrolled to 50px from the bottom
  if (scrollFromBottom <= 100) {
    // Add the class "hideges" to the element
    $('a.geschenkbutton').addClass('hideges');
  } else {
    // Remove the class "hideges" from the element
    $('a.geschenkbutton').removeClass('hideges');
  }
});



  $(document).ready(function() {
    
    
    /* rewrite spa button target */
    $('.buttongelb-navi').each(function() {
      var buttonText = $(this).text();
      if (buttonText === 'TERMIN BUCHEN' || buttonText === 'BOOK SPA') {
        // If yes, change the target attribute to "_self"
        $(this).attr('target', '_self');
      }
    });
    /* rewrite spa button target */
    
    
    attbgposition();


    var ios = false;
       if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            ios = true;
	} else { 
            ios = false;       
        }

        if ($('#zimmergallery').length){

                         galleryfunction($('#zimmergallery'));
        }


    if ($('#photos-gallery').length){

             jQuery('#photos-gallery').load("/sliders/"+ jQuery('#photos-gallery').data('galleryslug') +" .gallery-container", function() {

               galleryfunction($('#photos-gallery'));
             });
    }
    
    if ($('#photos-gallerytwo').length){

        jQuery('#photos-gallerytwo').load("/sliders/"+ jQuery('#photos-gallerytwo').data('galleryslug') +" .gallery-container", function() {

        galleryfunction($('#photos-gallerytwo'));
        console.log('ttttest');
        });
    }
    



    function galleryfunction($element) {



    /* galerie */

    var numImages = $element.find('.gallery-image').length;
    var currentIndex = 0;


    if(ios) {
        $element.find('.gallery-image a img').each(function() {
            $(this).attr('sizes', '');
        });
    }


    if(window.innerWidth > 991) {

        $element.find('.gallery-image').slice(0, 2).addClass('active');
    
    } else {

        $element.find('.gallery-image').first().addClass('active');

    }
    $element.next().find('img').first().addClass('active-thumbnail');

    $element.find('.gallery-image').each(function(index) {
      var thumbnailSrc = $(this).find('img').attr('src');
      var thumbnail = $('<img>')
        .attr('src', thumbnailSrc)
        .addClass('zimmergaleriebild');

      if (index === 0) {
        thumbnail.addClass('active-thumbnail');
      }

      thumbnail.click(function() {
          if(shortestImageHeight>0) {} else {
            if($element.find('.gallery-image.active a img').first().height() > 0) {
                shortestImageHeight = $element.find('.gallery-image.active a img').first().height();
            } else {
                shortestImageHeight = 200;
            }
          }
          $element.find('.gallery-image a').height(shortestImageHeight);



        $element.next().find('img').removeClass('active-thumbnail');
        thumbnail.addClass('active-thumbnail');

        var index = thumbnail.index();
        currentIndex = index;
        console.log('numImages:'+numImages);
        console.log('index:'+index);
        console.log('currentIndex:'+currentIndex);
        $element.find('.gallery-image').removeClass('active');

        if(numImages == index + 1) {
            $element.find('.gallery-container').css('flex-direction', 'row-reverse');

        } else {

            $element.find('.gallery-container').css('flex-direction', 'row');

        }


        $element.find('.gallery-image').eq(index).addClass('active');

        if(window.innerWidth > 991) {
            $element.find('.gallery-image').eq((index + 1) % numImages).addClass('active');
        }
      });

      var fancyboxLink = $(this).find('a[data-fancybox="gallery"]');
      fancyboxLink.attr('href', thumbnailSrc);

      $element.next().append(thumbnail);
    });



    $element.find('[data-fancybox="gallery"]').fancybox({
      loop: true,
      buttons: [
        'zoom',
        'slideShow',
        'fullScreen',
        'download',
        'close'
      ]
    });


    /* /galerie */



  };


  if (document.cookie.indexOf("popupferien") === -1) {
        $('.popupferien').show(); // Display the popup
      }

      // Handle click on the close button
      $('.popupferienclose').click(function() {
        // Write the "popupdirektbuchung" cookie
        document.cookie = "popupferien=true";

        // Close the popup
        $('.popupferien').hide();
      });



      if (document.cookie.indexOf("popupdirektbuchung") === -1) {
        $('.popupdirektbuchung').show(); // Display the popup
      }

      // Handle click on the close button
      $('.popupclose').click(function() {
        // Write the "popupdirektbuchung" cookie
        document.cookie = "popupdirektbuchung=true";

        // Close the popup
        $('.popupdirektbuchung').hide();
      });

      $(".subnavlink").click(function() {
        $("body").removeClass("noscroll");
        $('.navigationoverlay').hide();

      });

      $(".menubutton").click(function() {
        $("body").addClass("noscroll");
        setTimeout(toggleScrollIndicator, 500);
        
      });

      $(".closebutton").click(function() {
        $("body").removeClass("noscroll");
      });

        function checkScroll() {
    // Get the element with class '.menubereichcont'
        const menubereichcont = $('.menubereichcont');

        // Calculate the total scrollable height of the element
        const scrollableHeight = menubereichcont.prop('scrollHeight') - menubereichcont.innerHeight();

        // Check if the scroll position is at the bottom or beyond
        if (menubereichcont.scrollTop() >= scrollableHeight - 20) {
        // If at the bottom, hide the scroll icon
        $('.scroll-icon').hide();
        } else {
        // If not at the bottom, show the scroll icon
        $('.scroll-icon').show();
        }
    }

  // Bind the scroll event to the '.menubereichcont' element
  $('.menubereichcont').on('scroll', checkScroll);


      /* scroll indicator */

          function hasScrollbar() {
            return $('.menubereichcont')[0].scrollHeight > $('.menubereichcont').innerHeight();
            }

            // Function to toggle the scroll indicator visibility
            function toggleScrollIndicator() {
            $('.scroll-indicator').toggle(hasScrollbar());
            checkScroll();
            }



      $(document).on("click", function(event) {
        // Check if the clicked element is not part of .navigationoverlay
        if (!$(event.target).closest(".navigationoverlay").length && !$(event.target).is(".navigationoverlay")) {
          $(".navigationoverlay").hide();
        }
      });

    function addMenuActiveClass() {
      if ($('.navigationoverlay').css('display') === 'block') {
        $('.simplebooking').removeClass('menuactive');
      } else {
        $('.simplebooking').addClass('menuactive');
      }
    }

    // Attach click event handlers to .menubutton and .closebutton
    /*
    $('.menubutton, .closebutton, .subnavlink').click(function() {
      addMenuActiveClass();
    });
    */
   
    var menuitem = $("body").data("menuitem");
    if (menuitem) {
      var container = $("#" + menuitem);
      if (container.length) {
        container.children(".subnav").css("display", "flex");
        container.find(".nav .expanded").show();
        container.find(".nav .expand").hide();
        container.find(".nav .expanded").addClass('lokd');
      }
    }

    $(".menulinkcontainer").each(function() {
      var container = $(this);
      var timeout;
      var locked = false;
      var isMobile = false;

      // Feature detection to handle mobile devices
      if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
        isMobile = true;
      }
/*
      container.hover(
        function() {
          if (!isMobile || container.find(".nav .expanded").hasClass('lokd')) {
            clearTimeout(timeout);
            container.children(".subnav").css("display", "flex");
            container.find(".nav .expanded").show();
            container.find(".nav .expand").hide();
            if (!container.find(".nav .expanded").hasClass('lokd')) {
              container.find(".nav .expanded").removeClass('lokd');
            }
          }
        },
        function() {
          if (!isMobile && !container.find(".nav .expanded").hasClass('lokd')) {
            timeout = setTimeout(function() {
              container.children(".subnav").hide();
              container.find(".nav .expanded").hide();
              container.find(".nav .expand").show();
              container.find(".nav .expanded").removeClass('lokd');
            }, 500);
          }
        }
      );
*/
      container.find(".expanded, .expand").on('click', function(e) {
        e.stopPropagation();

        if (!container.find(".nav .expanded").hasClass('lokd')) {
          container.children(".subnav").css("display", "flex");
          container.find(".nav .expanded").show();
          container.find(".nav .expand").hide();
          container.find(".nav .expanded").addClass('lokd');
        } else {
          container.children(".subnav").hide();
          container.find(".nav .expanded").hide();
          container.find(".nav .expand").show();
          container.find(".nav .expanded").removeClass('lokd');
        }
        toggleScrollIndicator();
      });

      container.find(".nav .menulinktop").on('click', function(e) {
        if (isMobile) {
          e.preventDefault();
          window.location.href = $(this).attr('href');
        }
      });
    });


    $('.scroll-indicator').click(function() {
      // Calculate the target scroll position (all the way down)
      var targetScrollPosition = $('.menubereichcont').prop('scrollHeight') - $('.menubereichcont').outerHeight();
  
      // Scroll the .menubereichcont element to the target position
      $('.menubereichcont').animate({ scrollTop: targetScrollPosition }, 1000); // You can adjust the animation duration (1000ms = 1 second) as needed
    });


  });

/* Lenis */




 if(!$('.homebody').length) {

  
const lenis = new Lenis();


$(document).ready(function() {
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);

}

requestAnimationFrame(raf);
});


}






  /* Lenis */

window.addEventListener("scroll", function() {
    var mainnav = document.getElementById("mainnav");
    var scrolled = window.scrollY;

    if (scrolled >= 150) {
        mainnav.classList.add("scrolling");
    } else {
        mainnav.classList.remove("scrolling");
    }
});
  
  /* cookie-script override 
  
  $( document ).ready(function() {
      setTimeout(() => {    $('#cookiescript_buttons #cookiescript_accept').attr('style', 'color:#fff;background-color:#dcae6b;border-top-right-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:0px;border-top-left-radius:0px;padding-left:15px;padding-right:15px;');
  }, 1000);

  }); 
	*/
