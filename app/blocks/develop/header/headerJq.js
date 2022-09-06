$(function () {
	var currentScroll;
	var header = $(".header-top");
	var heightHeader = $(".header-top").outerHeight();
	var defaultOffset = heightHeader * 2.5;

	function scrollPosition() {
		return window.scrollY || document.documentElement.scrollTop;
	}

	window.onscroll = function () {
		if (scrollPosition() > currentScroll && !header.hasClass('header-fixed') && scrollPosition() > defaultOffset) {
			header.addClass('header-fixed');
			console.log(1112)
		} else if (scrollPosition() < currentScroll && header.hasClass('header-fixed')) {
			header.removeClass('header-fixed');
		}

		currentScroll = scrollPosition();
	}
});

