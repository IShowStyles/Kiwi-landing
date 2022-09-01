$(function () {

	var currentScroll;
	var header = $(".header-top");
	var heightHeader = $(".header-top").outerHeight();
	var defaultOffset = heightHeader * 2.5;

	function scrollPosition() {
		window.scrollY || document.documentElement.scrollTop
	}

	function containClass() {
		header.hasClass('header-fixed')
	}

	window.onscroll = function () {
		if (scrollPosition() > currentScroll && !containClass() && scrollPosition() > defaultOffset) {
			header.addClass('header-fixed');
		} else if (scrollPosition() < currentScroll && containClass()) {
			header.removeClass('header-fixed');
		}

		currentScroll = scrollPosition();
	}

});
