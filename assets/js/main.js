// Modified http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Only fires on body class (working off strictly WordPress body_class)

var ExampleSite = {
  // All pages
  common: {
    init: function() {
    
    },
    finalize: function() { }
  },
  // Home page
  home: {
    init: function() {
      	
    }
  },
  // About page
  about: {
    init: function() {
      // JS here
    }
  }
};

var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = ExampleSite;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {

    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });

    UTIL.fire('common', 'finalize');
  }
};

$(document).ready(UTIL.loadEvents);




    	function parallax(){
   			var scrolled = $(window).scrollTop();
   			$('.shapes').css('background-position-y', -(scrolled * 0.4) + 'px');
   		}
    
   		$(window).scroll(function(e){
    		parallax();
    	});
 
    // jQuery $('document').ready(); function
    $('document').ready(function(){
 
        // Calling LayerSlider on your selected element after the document loaded
        $("#layerslider").layerSlider();
    });
    
$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".fitvids").fitVids();
  });

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5,
    minItems: 3,
    controlNav: false,
    prevText: "<span class='fa fa-arrow-circle-left'></span>",
    nextText: "<span class='fa fa-arrow-circle-right'><span>",
  });
});