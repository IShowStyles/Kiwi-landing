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


const menuElementList = document.querySelectorAll('.header-top__menu_left > ul > li');
const toggleMenuElementList = menuElementList[1];
let dropdown = document.querySelector('.header__dropdown');
const textToggleMenuElementList = toggleMenuElementList.querySelector('span');
let state = false;
const toggleMenu = () => {
	state = !state;
	if (state) {
		textToggleMenuElementList.style.color = '#01A3A4';
		dropdown.classList.add('header__dropdown_active');
	} else {
		textToggleMenuElementList.style.color = '#212121';
		dropdown.classList.remove('header__dropdown_active');
	}
}

const burger = document.querySelector('.header-menu');

const mobileMenu = document.querySelector('.header-mobile__menu');
const bodyLock = document.querySelector('body');


const buttonHandler = () => {
	burger.addEventListener('click', async () => {
		document.querySelector("body").style.paddingTop = 0;
		mobileMenu.classList.toggle('menu_active');
		await document.querySelector(".header").scrollIntoView({block: "center", behavior: "smooth"});
		if (mobileMenu.classList.contains('menu_active')) {
			burger.classList.add('header-menu_active');
			bodyLock.classList.add('lock');
		} else {
			burger.classList.remove('header-menu_active');
			bodyLock.classList.remove('lock');
		}
	});
}


document.addEventListener('DOMContentLoaded', () => {


	document.body.addEventListener('click', function (e) {

		console.log(e.target === textToggleMenuElementList)
		if (state && e.target !== textToggleMenuElementList) {
			toggleMenu();
		}
	})

	textToggleMenuElementList.addEventListener("click", function (e) {
		toggleMenu();
	});


	buttonHandler();
})
