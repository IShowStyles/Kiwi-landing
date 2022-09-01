const menuElementList = document.querySelectorAll('.header-top__menu-left > ul > li');
const toggleMenuElementList = menuElementList[1];
let dropdown = document.querySelector('.header__dropdown');
const textToggleMenuElementList = toggleMenuElementList.querySelector('span');
let state = false;
const toggleMenu = () => {
	state = !state;
	if (state) {
		textToggleMenuElementList.style.color = '#01A3A4';
		dropdown.classList.add('header__dropdown--active');
	} else {
		textToggleMenuElementList.style.color = '#212121';
		dropdown.classList.remove('header__dropdown--active');
	}
}

const burger = document.querySelector('.header-menu');

const mobileMenu = document.querySelector('.header-mobile__menu');
const bodyLock = document.querySelector('body');


const buttonHandler = () => {
	burger.addEventListener('click', async () => {
		document.querySelector("body").style.paddingTop = 0;
		mobileMenu.classList.toggle('menu--active');
		await document.querySelector(".header").scrollIntoView({block: "center", behavior: "smooth"});
		if (mobileMenu.classList.contains('menu--active')) {
			burger.classList.add('header-menu--active');
			bodyLock.classList.add('lock');
		} else {
			burger.classList.remove('header-menu--active');
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
