$(document).ready(function() {
	// gets fixed top navigation
	$(window).scroll(function() {
		if ( $(window).scrollTop() > 700 ) {
			$(".navbar").addClass("fixxed") 
		} else { $(".navbar").removeClass("fixxed") }
	});
	// goes to particular section when clicked 
	$("#thome").click(function(e) {
		e.preventDefault();
		$("#btn-btnav").addClass('collapsed');
		$("#mainav").removeClass('in');
    	$('html, body').animate({
        	scrollTop: $(".home").offset().top -40 
    	}, 2000);
	});
	$("#tabout").click(function(e) {
		e.preventDefault();
		$("#btn-btnav").addClass('collapsed');
		$("#mainav").removeClass('in');
    	$('html, body').animate({
        	scrollTop: $(".about").offset().top -60
    	}, 2000);
	});
	$("#tstaff").click(function(e) {
		e.preventDefault();
		$("#btn-btnav").addClass('collapsed');
		$("#mainav").removeClass('in');
    	$('html, body').animate({
        	scrollTop: $(".staff").offset().top -40
    	}, 2000);
	});
	$("#tgallery").click(function(e) {
		e.preventDefault();
		$("#btn-btnav").addClass('collapsed');
		$("#mainav").removeClass('in');
    	$('html, body').animate({
        	scrollTop: $(".gallery").offset().top -40
    	}, 2000);
	});
	$("#tnews").click(function(e) {
		e.preventDefault();
		$("#btn-btnav").addClass('collapsed');
		$("#mainav").removeClass('in');
    	$('html, body').animate({
        	scrollTop: $(".news").offset().top -40
    	}, 2000);
	});	
	$("#tservices").click(function(e) {
		e.preventDefault();
		$("#btn-btnav").addClass('collapsed');
		$("#mainav").removeClass('in');
    	$('html, body').animate({
        	scrollTop: $(".services").offset().top -40
    	}, 2000);
	});
	$("#tcontact").click(function(e) {
		e.preventDefault();
		$("#btn-btnav").addClass('collapsed');
		$("#mainav").removeClass('in');
    	$('html, body').animate({
        	scrollTop: $(".contactus").offset().top -40
    	}, 2000);
	});
	// 'Contact Us' fields
	$('#cu-name').on('blur', function() {
		if (this.value == '') {this.value = 'Name'}
	});
	$('#cu-email').on('blur', function() {
		if (this.value == '') {this.value = 'E-mail'}
	});
	$('#cu-tel').on('blur', function() {
		if (this.value == '') {this.value = 'Telephone'}
	});

	// section 'Our instructors'
	(function() {
		if ($(window).width() <= 500 ) {
			$('.imgstaff').each(function() {
				$(this).prependTo($(this).parent().find('.col-xs-8'));
				$(this).parent().css('width', '100%');
				$(this).css({'width': '50%', 'margin': '0 25%'});
				$(this).parent().find('h3, p').css({'text-align': 'center', 'padding': '0'});
			});
		}
	})();
	$(window).resize(function() {
		if ($(window).width() <= 500 ) {
			$('.imgstaff').each(function() {
				$(this).prependTo($(this).parent().find('.col-xs-8'));
				$(this).parent().css('width', '100%');
				$(this).css({'width': '50%', 'margin': '0 25%'});
				$(this).parent().find('h3, p').css({'text-align': 'center', 'padding': '0'});
			});
		} else {
			$('.imgstaff').each(function() {
				if ($(this).parent().hasClass('left-staff')) {
					$(this).appendTo($(this).parent().parent());
				} else if ($(this).parent().hasClass('right-staff')) {
					$(this).prependTo($(this).parent().parent());
					$(this).parent().find('.col-xs-8 > h3, p').css('padding-left', '30px');
				};
			});
			$('.imgstaff').css({'width':'33.33333%', 'margin': '0'});
			$('.left-staff, .right-staff').css('width', '66.66667%');
			$('.left-staff, .right-staff').find('h3, p').css('text-align', '');

		}
	});

});