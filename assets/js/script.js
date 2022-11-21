'use strict'

/**
 * navbar toggle
 */

const menuOpen = document.querySelector("[data-menu-open]");
const menuClose = document.querySelector("[data-menu-close]");
const Navbar = document.querySelector("[data-navbar]");
const Overlay = document.querySelector("[data-overlay]");

const navElems = [menuOpen, menuClose, Overlay];

for (let i = 0; i < navElems.length; i++){
    navElems[i].addEventListener("click", function(){
        Navbar.classList.toggle("active");
        Overlay.classList.toggle("active");
    });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const gotopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function(){
    if (window.scrollY >= 80) {
        header.classList.add("active");
        gotopBtn.classList.add("active");
    } else { 
        header.classList.remove("active");
        gotopBtn.classList.remove("active");
    }
})
