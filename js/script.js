$(function(){
	$(document).on('mouseenter', '.minuteLine', function(event) {
		var thisNumber = event.currentTarget.dataset.number;
		var metric = thisNumber/60;
		$('.inputnumber').val(thisNumber);
		var metricEl = $('.metric');
		metric = Math.round(metric * 100) / 100;
		$('.minuteLine').css('color', 'black');
		$(this).css('color', 'green');
		metricEl.html(thisNumber + ' minuter är: ' + metric + ' timmar').fadeIn('fast');
	});
	$(document).on('submit', '.fk-form', function(event) {
		event.preventDefault();
		var thisNumber = $('.inputnumber').val();
		var metric = thisNumber/60;
		var metricEl = $('.metric');
		metric = Math.round(metric * 100) / 100;
		metricEl.html(thisNumber + ' minuter är: ' + metric + ' timmar').fadeIn('fast');
	});
	$(document).on('mouseenter', '.zero', function() {
		$('.metric').fadeOut('fast');
	});

	$(window).bind("orientationchange", function(){
		$('.metric').fadeOut('fast');
	});

	$("#noUiSlider").noUiSlider({
		range: [0, 59],
		start: [20],
		handles: 1,
		step: 1,
		margin: 20,
		orientation: 'horizontal',
		behaviour: 'tap-drag',
		serialization: {
			mark: ',',
			resolution: 1,
			to: [$('#value-span'), 'html']
		},
		slide: function(){
			var minutes = $('#value-span').html();
			var metric = minutes/60;
			metric = Math.round(metric * 100) / 100;
			$('#metricValue').html(metric + ' timmar');
		}
	});
});

