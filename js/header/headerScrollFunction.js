"use strict"
import { headerData } from "./headerData.js";



function elementHeight(path) {
   let height = parseFloat(window.getComputedStyle(document.querySelector('header')).height);
    return height
}

function headerScrollDetector() {  

    let activeSectionIndex =  0;  
    var sections = [];
    var top;
    var top1;
    var scroll = window.scrollY + elementHeight('header')
    
    for (let i=0; i < headerData.structure.length; i++) {
        
        top = headerData.structure[i].href
        if (top === '#') {
            sections.push(0)
            continue;
        }
        top1 = document.querySelector(top).offsetTop        
        sections.push(top1)

        if (top1 <= scroll) {
            activeSectionIndex = i;
        }
        else {
            break
        }
        console.log(activeSectionIndex);

    }
    // console.log(activeSectionIndex);
    // console.log(sections);
    // console.log(scroll);
 let links = document.querySelectorAll("nav a");
 let clName = '';
 for (let i=0; i < links.length; i++) {
     clName = ' ' + links[i].className + ' ';
     clName = clName.replace('active', '' )
    links[i].className = clName
    }
    links[activeSectionIndex].className += 'active'
 }



window.addEventListener("scroll", headerScrollDetector)

export {headerScrollDetector}