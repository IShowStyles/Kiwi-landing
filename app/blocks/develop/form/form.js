$(document).ready(function () {

	$.fancybox.defaults.hideScrollbar = true;

	$('[data-fancybox]').fancybox({

		type: 'inline',
		touch: false,
		transitionEffect: "fade",
		modal: false,



	});

	$("#Email-form").validate({
		rules: {
			email: {
				required: true,
				email: true,
				minlength: 6,
			},
			messages: {
				email: "Please enter a valid email address",
				minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
			},
		},
		submitHandler: function (form) {
			$('#Email-form input').val('');
			setTimeout(function() {
				$.fancybox.close();
			}, 6750);
			$.fancybox.open({
				src: '#subscription-modal',
				type: 'inline',
				opts: {
					touch: false
				}
			});
		}
	});


});
