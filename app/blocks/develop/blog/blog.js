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
