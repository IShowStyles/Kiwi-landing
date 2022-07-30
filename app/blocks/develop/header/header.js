document.addEventListener('DOMContentLoaded', ()=>{

	const menuBtn = document.querySelector('.header-top__menu-btn');
	let dropdown = menuBtn.closest('.header-top__menu-dropdown').querySelector('.header__dropdown');

	const toggleMenu = () => {
		menuBtn.onclick = ()=>{
			console.log(dropdown)
			menuBtn.classList.toggle('header-top__menu-btn--active');
			dropdown.classList.toggle('header__dropdown--active');
		}
	}

	menuBtn.addEventListener("click", function (e) {
		e.stopPropagation();
		toggleMenu();
	});

	document.addEventListener("click", function (e) {
		const target = e.target;
		const its_menu = target == dropdown || dropdown.contains(target);
		const its_btnMenu = target == menuBtn;
		const menu_is_active = dropdown.classList.contains("header__dropdown--active");

		if (!its_menu && !its_btnMenu && menu_is_active) {
			toggleMenu();
		}
	})


	window.onclick = function (e) {
		if (e.target.className !== "header-top__menu-btn") {
			menuBtn.classList.remove('header-top__menu-btn--active');
			dropdown.classList.remove('header__dropdown--active');
		}
	};

})
let h = document.querySelector('.header').scrollHeight;
console.log(h)
