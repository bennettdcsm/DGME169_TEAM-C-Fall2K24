document.addEventListener("DOMContentLoaded", function () {
	const menuIconWrapper = document.querySelector(".menu-icon-wrapper");
	const menuIcon = document.querySelector(".menu-icon");
	const navBar = document.querySelector(".nav-bar");

	menuIconWrapper.addEventListener("click", function (e) {
		e.stopPropagation();
		menuIcon.classList.toggle("menu-icon-active");
		navBar.classList.toggle("nav-bar_open");
	});

	document.addEventListener("click", function () {
		menuIcon.classList.remove("menu-icon-active");
		navBar.classList.remove("nav-bar_open");
	});
});
