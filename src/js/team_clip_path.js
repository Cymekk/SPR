const allInfoBtn = document.querySelectorAll(".info-btn")

const showInfo = e => {
	let text = e.target.nextElementSibling
	console.log(text)
	text.classList.toggle("active")
}

allInfoBtn.forEach(el => {
	el.addEventListener("click", showInfo)
})
