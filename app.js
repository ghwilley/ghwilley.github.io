$(document).ready(function() {
	
	$('.sum_link').click(function(e) {
		e.preventDefault();
		$('.nav').css('color', 'black');
		$(this).css('color', 'red');
		$('.content').css('display', 'none');
		$('.summary').toggle();
	});


	$('.skill_link').click(function(e) {
		e.preventDefault();
		$('.nav').css('color', 'black');
		$(this).css('color', 'red');
		$('.content').css('display', 'none');
		$('.skills').toggle();
	});

	$('.employ_link').click(function(e) {
		e.preventDefault();
		$('.nav').css('color', 'black');
		$(this).css('color', 'red');
		$('.content').css('display', 'none');
		$('.employment').toggle();
	});

	$('.edu_link').click(function(e) {
		e.preventDefault();
		$('.nav').css('color', 'black');
		$(this).css('color', 'red');
		$('.content').css('display', 'none');
		$('.education').toggle();
	});

	$('.ach_link').click(function(e) {
		e.preventDefault();
		$('.nav').css('color', 'black');
		$(this).css('color', 'red');
		$('.content').css('display', 'none');
		$('.achievments').toggle();
	});

});