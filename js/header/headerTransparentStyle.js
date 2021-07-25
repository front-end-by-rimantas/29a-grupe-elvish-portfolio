"use strict"

function headerStyle() {
    let scroll = window.scrollY,
        limit = 40,
        element = document.getElementById('main_header'),
        element1 = document.getElementById('logo_light'),
        element2 = document.getElementById('menu-button-white'),
        clname = '';
    if ( scroll > limit ) {
        clname = ' ' + element.className + ' ';
        clname = clname.replace(" transparent ", " ");
        element.className = clname;
        element1.classList.add("none")
        element2.classList.add("none")
    } else {
        element.className += ' transparent';
        element1.classList.remove("none")
        element2.classList.remove("none")
    }
}

export {headerStyle}
