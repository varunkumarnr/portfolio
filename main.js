jQuery(document).ready(function(){ 
	
	
	var $logo 	= $('#logo');

    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
	
	$('.menu .tabs a').click(function() {
	  $logo.fadeIn('slow');
	});
	
	$('.tab-profile').click(function() {
	  $logo.fadeOut('slow');
	});	
    var $content 		= $("#content");
	

  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:"tmenu",
	  tabActiveClass	:'active',
	});


	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
    );
});