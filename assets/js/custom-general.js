// DOM  starts here 

jQuery(document).ready(function($){
"use strict";


/* Top bar Start */
jQuery('.top-bar .close').on('click', function() {
    var el = jQuery('.top-bar');
    var child = jQuery('.top-bar .container');
    el.toggleClass('open');  

    if( el.hasClass('open') ) {
      child.height(child .attr('data-height'));
    } else {
      child.attr('style', 'height: 0;');
    }
  });
  topBarSize();
  jQuery(window).resize(function() {
    topBarSize();
});
  
function topBarSize() {
    var el = jQuery('.top-bar .container');
    el.css( {
      'display' : 'none',
      'height'  : 'auto' 
    }).attr('data-height', el.height()).attr('style', 'height: 0;').parent().removeClass('open');
  }
/* // Top bar End   */

// Tooltip
$('[data-toggle="tooltip"]').tooltip(); 
// Tooltip

// Slicknav Responsive Dropdown Menu
jQuery(function(){
	jQuery('#sub-nav').slicknav({
	label: 'Menu',
	duration: 1000,
	easingOpen: "easeOutBounce", //available with jQuery UI
	closeOnClick:true,
	prependTo:".menu",
	closedSymbol:"&gt;",
	openedSymbol:"&nu;"
	});

});
// Slicknav Responsive Dropdown Menu

// Bootstrap DropDown Menu Hover
$(".navbar .dropdown").hover(            
	function() {
		$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
		$(this).toggleClass('open');        
	},
	function() {
		$('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
		$(this).toggleClass('open');       
	}
);
// Bootstrap DropDown Menu Hover

/***************************************************
	//	(Back to Top)
***************************************************/
    var offset = 250;
    var duration = 1000;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
			jQuery('.back-to-top-fixed').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
			jQuery('.back-to-top-fixed').fadeOut(duration);
        }
    });
    jQuery('.back-to-top, .back-to-top-fixed').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
<!-- // Back to top -->

 // Header Search
jQuery("#site-search").on('click', function(){
	//Toggle the bar up 
jQuery(".site-search").slideToggle();	
	}); // end sub panel click function

// close button - Toggle the bar
jQuery(".site-search .close").on('click', function(){
	jQuery(".site-search").slideToggle();
	}); 


// Increase or Decrese Font Size

	  var originalSize = $('.fontresize').css('font-size');
	  var originalSize1 = $('.fontresize li').css('font-size');
	  
// Reset
	 jQuery(".resetMe").on('click', function(){
		$('.fontresize').css('font-size', originalSize); 
		$('.fontresize li').css('font-size', originalSize1); 
		return false;
	  });

 // Increase Font Size
	  	 jQuery(".increase").on('click', function(){
		var currentSize = $('.fontresize, .fontresize li').css('font-size');
		var currentSize = parseFloat(currentSize)*1.2;
		$('.fontresize, .fontresize li').css('font-size', currentSize);

		return false;
 });

 // Decrease Font Size
	  jQuery(".decrease").on('click', function(){
		var currentFontSize = $('.fontresize, .fontresize li').css('font-size');
		var currentSize = $('.fontresize, .fontresize li').css('font-size');
		var currentSize = parseFloat(currentSize)*0.8;
		$('.fontresize, .fontresize li').css('font-size', currentSize);

		return false;
	  });
// Increase Or Decrese Font Size

// delegate calls to data-toggle="lightbox"
		$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		return $(this).ekkoLightbox({
		always_show_close: true
		});
		});
// Light Box


/* Parallax Image */
    parallax();
jQuery(window).scroll(function() {
    parallax();
});

function setpos(element, factor) {
    factor = factor || 5;

    var offset = jQuery(element).offset();
    var w = jQuery(window);

    var posx = (offset.left - w.scrollLeft()) / factor;
    var posy = (offset.top - w.scrollTop()) / factor;
	var posy=posy-65;
    jQuery(element).css('background-position', '50% ' + posy + 'px');

    // use this to have parralax scrolling vertical and horizontal
    //jQuery(element).css('background-position', posx+'px '+posy+'px');
}


function parallax() {
	var checkparallaxclass = $('.banner-parallax');
if (checkparallaxclass.length) {
    setpos(".banner-parallax");
}
}
/* // Parallax Image */


// Isotope 
$(function(){
      
var $container = $('#portfolio');
$container.isotope({
itemSelector : '.element'
});

var $optionSets = $('#options .option-set'),
$optionLinks = $optionSets.find('a');
$optionLinks.on('click', function(){
var $this = $(this);
// don't proceed if already selected
if ( $this.hasClass('selected') ) {
  return false;
}
var $optionSet = $this.parents('.option-set');
$optionSet.find('.selected').removeClass('selected');
$this.addClass('selected');

// make option object dynamically, i.e. { filter: '.my-filter-class' }
var options = {},
	key = $optionSet.attr('data-option-key'),
	value = $this.attr('data-option-value');
// parse 'false' as false boolean
value = value === 'false' ? false : value;
options[ key ] = value;
if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
  // changes in layout modes need extra logic
  changeLayoutMode( $this, options )
} else {
  // otherwise, apply new options
  $container.isotope( options );
}

return false;
});
});
// Isotope 


// Form Controls 
/* Contact Form */
jQuery('#contact_form').validate(
    {
    rules: {
    name: {
    minlength: 2,
    required: true
    },
    email: {
    required: true,
    email: true
    },
	phone: {
    required: true,
	minlength:2
    },
    message: {
    minlength: 2,
    required: true
    }
    },
    highlight: function(element) {
    jQuery(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					jQuery.post('contact-general-form.php', jQuery("#contact_form").serialize(), function(data) { // action file is here 
						jQuery('#post_message').html(data);
					});
				}
    });

/* Appointment form */
jQuery('#appointment-form').validate(
    {
    rules: {
    firstname: {
    minlength: 2,
    required: true
    },
    email: {
    required: true,
    email: true
    },
	phone: {
    required: true,
    minlength: 2,
    },
    message: {
    minlength: 2,
    required: true
    }
    },
	
	messages: {
            firstname: "Please enter your first name",
            lastname: "Please enter your last name",
            email: "Please enter a valid email address",
			phone: "Please enter your phone number",
        },
		
    highlight: function(element) {
    jQuery(element).closest('.form-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.form-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					jQuery.post('appointment-general-form.php', jQuery("#appointment-form").serialize(), function(data) { // action file is here 
						jQuery('#post_message').html(data);
					});
				}
    });


/* order contact lenses form */
jQuery('#order-form').validate(
    {
    rules: {
    name: {
    minlength: 2,
    required: true
    },
    email: {
    required: true,
    email: true
    },
	phone: {
    required: true,
    minlength: 2,
    },
    message: {
    minlength: 2,
    required: true
    }
    },
	
	messages: {
            name: "Please enter your name",
			phone: "Please enter your phone number",
            email: "Please enter a valid email address",
        },
		
    highlight: function(element) {
    jQuery(element).closest('.form-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.form-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					jQuery.post('order-lens-form.php', jQuery("#order-form").serialize(), function(data) { // action file is here 
						jQuery('#post_message').html(data);
					});
				}
    });



// Date Picker 
$('.form_datetime').datetimepicker({
	language:  'en',
	weekStart: 1,
	pickTime: false,
	todayBtn:  0,
	autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	forceParse: 0,
	showMeridian:0,
	pickerPosition: "bottom-left",
	startView: 'month',
    minView: 'month'
});
// Date Picker 

// Form Controls 

// TwentyTwenty Container
jQuery(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});
jQuery(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.5, orientation: 'vertical'});
jQuery("#twentytwenty").twentytwenty({default_offset_pct: 0.5});

$(".twentytwenty-vertical").twentytwenty({
	default_offset_pct: 0.7, // How much of the before image is visible when the page loads
	orientation: 'vertical' // Orientation of the before and after images ('horizontal' or 'vertical')
});
// TwentyTwenty Container

// Form List Dropdown
$( document.body ).on( 'click', '.doctors-dropdown li', function( event ) {
	var $target = $( event.currentTarget );
		$target.closest( '.form-group' )
 			.find( '[data-bind="label"]' ).text( $target.text() )
			.end()
 		.children( '.dropdown-toggle' ).dropdown( 'toggle' );
	return false;
});

// Image Hover Overlay
$('.image-effect2 ').each( function() { $(this).hoverdir(); } );

// Before After Caption
$(".before-after .vertical-top").each(function() {
	var t = $(this).find(".image-caption").attr("title");
	$(this).append('<div class="bx-caption"><span>' + t + "</span></div>")
})


//Top Header Fixed
var growmodecheck = $('.grow-mode');
if (growmodecheck.length) {
  var jQuerytop1 = growmodecheck.offset().top +50;
}
if (growmodecheck.length) {
jQuery(window).scroll(function()
{   

    if (jQuery(window).scrollTop()>jQuerytop1)   
    {
     jQuery('#header').addClass('header');
	 
	 // Header header-white
		$('.main-nav>ul>li>a').css('padding' , '35px 8px 35px 8px');
	
		   $(".top-bar").hide();
    }
    else
    {
     $('#header').removeClass('header');
	 
	 // Header header-white
		$('.main-nav>ul>li>a').css('padding' , '43px 9px 43px 9px');
		
	 	   $(".top-bar").show();
     }
	 
});
}
//Top Header Fixed end


});
// dom END