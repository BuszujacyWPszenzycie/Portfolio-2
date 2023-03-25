const hamburgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__mobile-list')
const introduction = document.querySelector('.introduction')
// console.log(testBtn)

const showNav = () => {
	navMobile.classList.toggle('nav__mobile-list-active')
	hamburgerBtn.classList.toggle('is-active')
	if (introduction.style.filter === 'blur(4px)') {
		introduction.style.filter = ''
	} else {
		introduction.style.filter = 'blur(4px)'
	}
}

hamburgerBtn.addEventListener('click', showNav)
