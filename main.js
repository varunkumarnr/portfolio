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
});
