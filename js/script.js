$(document).on('mouseover', '.minuteLine', function(event) {
	var thisNumber = event.currentTarget.dataset.number;
	var metric = thisNumber/60;
	$('.metric').html('Metric value is : ' + metric).fadeIn('fast');
});

$(document).on('mouseleave', '.minuteLine', function(event) {
	var metricClass = $('.metric');
	if (!metricClass.hasClass('clicked')) {
		$('.metric').html('').fadeOut('fast');
	}
});

$(document).on('click', '.minuteLine', function(event) {
	var thisNumber = event.currentTarget.dataset.number;
	var metric = thisNumber/60;
	var metricClass = $('.metric');
	metricClass.toggleClass('clicked');
});