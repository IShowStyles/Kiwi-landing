$( document ).ready(function() {
	$("#Email-form").validate({
	rules: {
		email: {
			required: true,
			email: true,
			minlength:6,
		},
		messages: {
			email: "Please enter a valid email address",
			minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
		},
	},
	submitHandler: function (form) {
		$('#Email-form input').val('');
		setTimeout(function() {
			$.fancybox.destroy();
		}, 6750);
		$.fancybox.open({
			src: '#subscription-modal',
			type: 'inline'
		});
	}
});
	$('[data-fancybox]').fancybox({
		touch: false,
		clickOutside : "false",
		modal: true,
		transitionEffect: "fade",
		clickSlide : "false",
		toolbar: false
	});




});
