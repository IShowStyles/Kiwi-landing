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
