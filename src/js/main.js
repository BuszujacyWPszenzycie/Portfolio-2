const hamburgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__mobile-list')
const introduction = document.querySelector('.introduction')
const body = document.querySelector('body')

console.log(body)

const showNav = () => {
	navMobile.classList.toggle('nav__mobile-list-active')
	hamburgerBtn.classList.toggle('is-active')
	if (introduction.style.filter === 'blur(4px)') {
		introduction.style.filter = ''
		body.style.overflow = ''
	} else {
		introduction.style.filter = 'blur(4px)'
		body.style.overflow = 'hidden'
	}
}

hamburgerBtn.addEventListener('click', showNav)

// ------------------------------------------------
// accordion

const workIcon = document.querySelector('.work__item-icon')
const workDescription = document.querySelector('.work__item-description')

console.log(workIcon)
console.log(workDescription)

const showDescription = () => {
	workDescription.classList.toggle('active')
	if (workIcon.style.transform === 'rotate(180deg)') {
		workIcon.style.transform = ''
	} else {
		workIcon.style.transform = 'rotate(180deg)'
	}
}

workIcon.addEventListener('click', showDescription)
