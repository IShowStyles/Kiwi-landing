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
			spaceBetween: 100,
		},
		480:{
			spaceBetween: 70,
		}
	},

});
