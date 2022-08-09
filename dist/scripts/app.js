document.addEventListener('DOMContentLoaded', () => {

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

	document.body.addEventListener('click',function (e){

		console.log(e.target === textToggleMenuElementList)
		if(state && e.target !== textToggleMenuElementList){
			toggleMenu();
		}
	})

	textToggleMenuElementList.addEventListener("click", function (e) {
		toggleMenu();
	});

	const burger = document.querySelector('.header-menu');

	const mobileMenu = document.querySelector('.header-mobile__menu');
	const bodyLock = document.querySelector('body');

	burger.addEventListener('click', () => {
		mobileMenu.classList.toggle('menu--active');
		if (mobileMenu.classList.contains('menu--active'))  {
			burger.classList.add('header-menu--active');
			bodyLock.classList.add('lock');
		}
		else {
			burger.classList.remove('header-menu--active');
			bodyLock.classList.remove('lock');
		}
	});

})





const slider = document.querySelector('.swiper');

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

		if(slider.querySelector('.swiper-pagination').style.display === 'none'){
			slider.querySelector('.swiper-pagination').style.display = 'flex'
		}

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 666) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			slider.querySelector('.swiper-pagination').style.display = 'none';
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

$(document).ready(function () {
	// $.fancybox.defaults.hideScrollbar = true;

	// $('#subscription-modal').fancybox({
	//
	// 	type: 'inline',
	// 	touch: false,
	// 	transitionEffect: "fade",
	// 	modal: false,
	//
	// });

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

const swiperReview = new Swiper('.reviews-content__bottom-con', {
	speed: 400,
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 120,
	navigation: {
		nextEl: '.reviews-slider__btn-right',
		prevEl: '.reviews-slider__btn-left',
	},
	breakpoints:{
		320:{
			spaceBetween: 100,
		},
		480:{
			spaceBetween: 70,
		}
	},

});



//# sourceMappingURL=app.js.map
