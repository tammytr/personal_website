// Show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('navbar-toggle','navbar-menu')

// Hide menu after click
const navLink = document.querySelectorAll('.navbar__link')

function linkAction() {
    const navMenu = document.getElementById('navbar-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Show active section in navbar
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
	const scrollY = window.pageYOffset
	const isMobileView = document.getElementById('navbar__toggle') && document.getElementById('navbar-menu')
	const margin = (isMobileView ? 32 : 160)

	sections.forEach(currentSection =>{
		const sectionHeight = currentSection.offsetHeight
		const sectionTop = currentSection.offsetTop - 60
		const sectionEnd = sectionTop + sectionHeight + margin
		sectionId = currentSection.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionEnd){
			document.querySelector('.navbar__menu a[href*=' + sectionId + ']').classList.add('active')
		} else{
			document.querySelector('.navbar__menu a[href*=' + sectionId + ']').classList.remove('active')
		}
	})
}

// Scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    viewFactor: 0.4,
    duration: 600,
    reset: false
})

sr.reveal('#about')
sr.reveal('#skills')
sr.reveal('#experience')
