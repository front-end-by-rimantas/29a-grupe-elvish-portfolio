"use strict"
import { headerData } from "./headerData.js";

function headerScrollDetector() {
    // var sections = [],
    // headerLinkCount = headerData.structure.length;
    
    // var Top  = document.getElementById('about-me').offsetTop
    // console.log(headerLinkCount)
    console.log(window.scrollY);
}

window.addEventListener("scroll", headerScrollDetector)




for (var i=0; i < headerData.structure.length; i++) {


}

console.log(window.scrollY);
export {headerScrollDetector}