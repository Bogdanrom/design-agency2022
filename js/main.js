// ========== Меню бургер ==============================
// ========================================================
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
// ========================================================
// ========================================================

// ========== Прокрутка при клике ======================
// ========================================================
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			// функція закривання бургер меню при скролі
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			
			e.preventDefault();
		}
	}
}
// ========================================================
// ========================================================

// ========================================================
// ========== cкрипт для появи додаткових карток секції projects ======
const btn = document.querySelector(".projects__link");
const content = document.querySelector(".projects__page-hide");

function removeActiveClass() {
    content.querySelectorAll('.projects__page-hide').forEach((adaptive) => adaptive.classList.remove('projects-page-show'));
}

btn.addEventListener('click', function() {
    if(content.classList.contains("projects-page-show")) {
        content.classList.remove("projects-page-show");
        removeActiveClass();
    } else {
        removeActiveClass();
        content.classList.add("projects-page-show");
    }
});
// ========================================================
// ========================================================

// ========== скрипт анімації ==================================
// _anim-items   - додаєм клас до елемента який буде анімуватися
// _anim-no-hide - вимикаємо повторно анімацію
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('anim-active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('anim-active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
// ========================================================
// ========================================================


// ========================================================
// =========== Динамический адаптив =======================

// ========================================================
// ========================================================

// ========================================================
// =========== Спойлер ====================================
document.querySelectorAll('.accordion').forEach((el) => {
	el.addEventListener('click', () => {
		let content = el.nextElementSibling;
		if (content.style.maxHeight) {
			document.querySelectorAll('.accord-content').forEach((el) => el.style.maxHeight = null)
		} else {
			document.querySelectorAll('.accord-content').forEach((el) => el.style.maxHeight = null)
			content.style.maxHeight = content.scrollHeight + 'px'
		}
	})
})
// ========================================================
// ========================================================