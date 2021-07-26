"use strict"

function hamburgerStyle() {
    let scroll = window.scrollY,
        limit = 600,
        element2 = document.getElementById('menu-button-white'),
        clname = '';
    if ( scroll > limit ) {
        element2.classList.add("none")
    } else {
        element2.classList.remove("none")
    }
}

export  {hamburgerStyle}