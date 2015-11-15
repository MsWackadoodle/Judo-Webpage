$(document).ready(function() {

	$(window).scroll(function() {
		if ( $(window).scrollTop() > 700 ) {
			$(".navbar").addClass("fixxed") 
		} else { $(".navbar").removeClass("fixxed") }
	});
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

	$('#cu-name').on('blur', function() {
		if (this.value == '') {this.value = 'Name'}
	});
	$('#cu-email').on('blur', function() {
		if (this.value == '') {this.value = 'E-mail'}
	});
	$('#cu-tel').on('blur', function() {
		if (this.value == '') {this.value = 'Telephone'}
	});

});