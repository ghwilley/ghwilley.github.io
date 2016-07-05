$(document).ready(function() {
	$('.sum_link').click(function(e) {
		e.preventDefault();
		$('.summary').toggle();
	});


	$('.skill_link').click(function(e) {
		e.preventDefault();
		$('.skills').toggle();
	});

	$('.employ_link').click(function(e) {
		e.preventDefault();
		$('.employment').toggle();
	});

	$('.edu_link').click(function(e) {
		e.preventDefault();
		$('.education').toggle();
	});

	$('.ach_link').click(function(e) {
		e.preventDefault();
		$('.achievments').toggle();
	});

});