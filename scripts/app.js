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




const slider = document.querySelector('.swiper');
const pagination = '.swiper-pagination';

function mobileSlider() {
	if (window.innerWidth <= 666 && slider.dataset.mobile === 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 25,
			slideClass: 'blog-card',
			simulateTouch:true ,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});

		if(slider.querySelector(pagination).style.display === 'none'){
			slider.querySelector(pagination).style.display = 'flex'
		}

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 666) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			slider.querySelector(pagination).style.display = 'none';
			mySwiper.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});

$(document).ready(function () {

	$("#Email-form").validate({

		rules: {
			email: {
				required: true,
				email: true,
				minlength: 6,
			},
			details: {
				required: ".form-email__input"
			},
			messages: {
				email: "Please enter a valid email address",
				minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
			},
		},
		submitHandler: function (form,event) {

			$('#Email-form input').val('');
			// setTimeout(function() {
			// 	$.fancybox.close();
			// }, 6750);
			$.fancybox.open({

				src: '#subscription-modal',
				type: 'inline',
				opts: {
					touch: false,
					transitionEffect: "fade",
					modal: false,
				}
			});
		}
	});
});

const swiperReview = new Swiper('.reviews-content__bottom_con', {
	speed: 400,
	slidesPerView: 1,
	slidesPerGroup: 1,
	// spaceBetween: 120,
	navigation: {
		nextEl: '.reviews-slider__btn_right',
		prevEl: '.reviews-slider__btn_left',
	},
	breakpoints:{
		320:{
			spaceBetween: 10,
		},
		480:{
			spaceBetween: 70,
		}
	},

});



