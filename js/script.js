"use strict";

// Animation on scroll

AOS.init({
	duration: 800,
	delay: 200,
	once: true,
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});
// close  menu after click link
$(".main-nav a").on("click", function () {
	$(".btn-mobile-nav").click();
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log(ent);

		if (ent.isIntersecting === false) {
			document.body.classList.add("sticky");
		}

		if (ent.isIntersecting === true) {
			document.body.classList.remove("sticky");
		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "-100px",
	}
);
obs.observe(sectionHeroEl);

///////////////////////////////////////

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
