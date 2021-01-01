// Active section
const showActive = 

// Show menu
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('navbar-toggle','navbar-menu')

// Hide menu after click

const navLink = document.querySelectorAll('.navbar__link')

function linkAction(){
    const navMenu = document.getElementById('navbar-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))