const menuBtn = document.querySelector(".menu-btn")
const navMobile = document.querySelector(".nav__mobile")
const popupInfoBtn = document.querySelector(".show-popup-btn")
const closePopupBtn = document.querySelector(".close-popup-btn")
const popupInfo = document.querySelector(".table__info")

menuBtn.addEventListener("click", () => {
	navMobile.classList.toggle("active")

	if (navMobile.classList.contains("active")) {
		menuBtn.style.backgroundImage = 'url("./dist/img/x.svg")'
	} else {
		menuBtn.style.backgroundImage = 'url("./dist/img/menu.svg")'
	}
})

popupInfoBtn.addEventListener("click", () => {
	popupInfo.classList.toggle("active")
})

closePopupBtn.addEventListener("click", () => {
	popupInfo.classList.remove("active")
})


