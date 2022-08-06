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
