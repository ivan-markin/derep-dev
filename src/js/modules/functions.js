export function isWebp() {
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export function mobileMenuHandler(evt) {
	const mobileMenuPopup = document.querySelector('.mobile-menu');

	evt.target.classList.toggle('active');
	mobileMenuPopup.classList.toggle('active');
	document.body.classList.toggle('fixed');
}

export function setTableCntWidth() {
	const root = document.documentElement;
	const tableCnt = document.querySelector('.governance__table-container');

	root.style.setProperty('--table-cnt-width', (window.innerWidth - 40) + "px");
}

export function setSliderWidth() {
	const root = document.documentElement;
	const slider = document.querySelector('.farming__slider');
	const navigationEl = document.querySelector('.navigation');

	if (window.matchMedia("(max-width: 768px)").matches) {
		root.style.setProperty('--slider-width', (window.innerWidth - 40) + "px");
	} else {
		root.style.setProperty('--slider-width', (window.innerWidth - navigationEl.offsetWidth - 80) + "px");
	}
}

export function popupCloseHandler(evt) {
	if (evt.target.classList.contains('popup')) {
		evt.target.classList.remove('active');
	}

	if (evt.target.classList.contains('popup-close') || evt.target.parentElement.classList.contains('popup-close')) {
		evt.target.closest('.popup').classList.remove('active');
	}

	document.body.classList.remove('fixed');
}
