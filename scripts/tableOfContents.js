$(document).ready(function(){	
//******************** Table OF Contents ********************************************************************************
	
	var windowHeight = $(window).height();
	$('.toc').height(windowHeight-165);

	var offset = $('#toc').offset().top;

	$(window).scroll(function() {  
	    if ($(window).scrollTop() > offset-10) {
	        $('#toc').addClass('stickyToc');
	    }
	    else {
	        $('#toc').removeClass('stickyToc');
	    }  
	});
});