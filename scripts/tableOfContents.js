$(document).ready(function(){	
//******************** START Table OF Contents ********************************************************************************
	// Calculate TOC offset TOP
			var topNavigationHeight = $('#topNavigation').height();
			var pageInfoHeight = $('#pageInfo').height();
			var totalOffsetTop = pageInfoHeight + topNavigationHeight;
			$('#toc').attr("data-offset-top", totalOffsetTop);
	
			// Calculate TOC offset BOTTOM
			var footerHeight = $('#footer').height();
			$('#toc').attr("data-offset-bottom", footerHeight+10);
			
			// Initalize the TOC
			$(function() {
			  var navSelector = '#toc';
			  var $myNav = $(navSelector);
			  Toc.init($myNav);
			  $('body').scrollspy({
			    target: navSelector
			  });
			});
//******************** END Table OF Contents ********************************************************************************	
});
