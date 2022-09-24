import * as flsFunctions from './modules/functions.js';
import Swiper, { Thumbs, Navigation } from 'swiper';

const menuButton = document.querySelector('#mainMenuButton');
const popups = document.querySelectorAll('.popup');
const popupCloseButtons = document.querySelectorAll('.popup-close');
const hideButtons = document.querySelectorAll('.hide-block-button');
const cardParamsButton = document.querySelector('.object-page__params-cta');
const connectWalletBtn = document.querySelector('.header__wallet-btn');

flsFunctions.isWebp();

const thumbsSwiper = new Swiper('.thumbs-swiper', {
	slidesPerView: 5,
	spaceBetween: 10,
})

const gallerySwiper = new Swiper('.gallery-swiper', {
	modules: [Thumbs],
	slidesPerView: 1,
	spaceBetween: 10,
	thumbs: {
		swiper: thumbsSwiper
	}
})

const farmingSwiper = new Swiper('.farming__slider', {
	modules: [Navigation],
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.farming__control_next',
		prevEl: '.farming__control_prev',
	},
})

popupCloseButtons.forEach(el => {
	el.addEventListener('click', flsFunctions.popupCloseHandler);
	document.body.classList.remove('fixed');
})

popups.forEach(el => {
	el.addEventListener('click', flsFunctions.popupCloseHandler);
	document.body.classList.remove('fixed');
})

menuButton.addEventListener('click', flsFunctions.mobileMenuHandler);
window.addEventListener('resize', flsFunctions.setTableCntWidth);
window.addEventListener('resize', flsFunctions.setSliderWidth);

if (cardParamsButton) {
	cardParamsButton.addEventListener('click', () => {
		const approvePopup = document.querySelector('.approve-popup');
		approvePopup.classList.add('active');
	})
}

if (hideButtons) {
	hideButtons.forEach(button => {
		button.addEventListener('click', (e) => {
			e.target.classList.toggle('active');
		})
	})
}

if (connectWalletBtn) {
	connectWalletBtn.addEventListener('click', () => {
		const connectPopup = document.querySelector('.connect-wallet-popup');
		connectPopup.classList.add('active');
	})
}

if (window.matchMedia("(max-width: 768px)").matches) {
	flsFunctions.setTableCntWidth();
}

if (window.matchMedia("(max-width: 1920px)").matches) {
	flsFunctions.setSliderWidth();
} 