// ===================== HEADER SLIDER ===============================================
var mySwiper = new Swiper('.swiper1', {
	// Optional parameters ========
	loop: true,
	uniqueNavElements: false,

	// Auto play ============
	autoplay: {
		delay: 3000
	},

	// If we need pagination ==========
	pagination: {
		el: '.swiper-pagination1'
	},

	// Navigation arrows ==============
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1'
	}
});

// ================== ANIMATION ON SCROLL ================================================
AOS.init();

// ================== PRELOADER ANIMATION =======================================================
(function() {
	function id(v) {
		return document.getElementById(v);
	}

	function loadbar() {
		var ovrl = id(`overlay`),
			prog = id(`percentage`),
			stat = id(`line`),
			img = document.images,
			c = 0;
		tot = img.length;

		function imgLoaded() {
			c += 1;
			var perc = ((100 / tot * c) << 0) + '%';
			prog.style.width = perc;
			stat.innerHTML = `Loading ${perc}`;
			if (c === tot) return doneLoading();
		}

		function doneLoading() {
			ovrl.style.opacity = 0;
			setTimeout(() => {
				ovrl.style.display = `none`;
			}, 1200);
		}

		for (var i = 0; i < tot; i++) {
			var tImg = new Image();
			tImg.onload = imgLoaded;
			tImg.onerror = imgLoaded;
			tImg.src = img[i].src;
		}
	}
	document.addEventListener(`DOMContentLoaded`, loadbar, false);
})();

// ============== SCROLL BUTTON ============================================================

// Get the button
let TopBtn = document.querySelector('#scroll-btn');

// On scroll down 500px, show the button
window.onscroll = () => (window.scrollY > 500 ? (TopBtn.style.display = `block`) : (TopBtn.style.display = `none`));

// On Click, Show Top page
function ScrollBtnF() {
	(document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}

// ============== FEATURES WORK ============================================================
$(function() {
	$(`.features-work li`).click(function() {
		$(this).addClass(`selected`).siblings().removeClass(`selected`); // Add selected class to links
		$(`.features-work img`).hide(); // Hide all content
		$(`.` + $(this).data(`class`)).show(); // Show selected content
	});
});

// ============== Testimonials ============================================================
var swiper = new Swiper('.swiper2', {
	loop: true,

	// Auto play ===================
	autoplay: {
		delay: 3000
	},

	pagination: {
		el: '.swiper-pagination2'
	},

	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2'
	}
});
