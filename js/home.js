// IMPORTS
import { count1, count2, count3, count4 } from "./data-count.js";
import { portfolioData } from "./data/portfolioData.js";
import { Gallery } from "./gallery/Gallery.js";
import { PortfolioItem } from "./gallery/PortfolioItem.js";
import { Header } from "./header/Header.js";
import { headerData } from "./header/headerData.js"; 
import { headerScrollDetector} from "./header/headerScrollFunction.js"; 
import { headerStyle } from "./header/headerTransparentStyle.js";
import { clientData } from "./client/clientData.js";
import { renderClient } from "./client/client.js";
import { showSlides } from "./client/slideShowFunction.js";
import { Education } from "./education/Education.js";
import { educationData } from "./data/educationData.js";
import { Services } from "./services/Services.js";
import { servicesData } from "./data/servicesData.js";
import { Progress } from "./progress/Progress.js";
import { progressData } from "./data/progressData.js";


// CODE EXECUTION

/* HEADER start */

// kontento generavimas
const header = new Header(headerData)
header.init()

// puslapio buvimo vietos nustatymas
window.addEventListener("scroll", function () {
  headerScrollDetector();
  headerStyle()
})
/* HEADER end */



/* HERO start */
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
/* HERO end */

/* ABOUT ME start */
const progress = new Progress('.about-progress-bar', progressData);
/* ABOUT ME end */

/* SERVICES start */
const services = new Services('services_box', servicesData);
/* SERVICES end */

/* WORKING HOURS start */
const data1 = parseInt(document.getElementById('fact-1').innerText);
const data2 = parseInt(document.getElementById('fact-2').innerText);
const data3 = parseInt(document.getElementById('fact-3').innerText);
const data4 = parseInt(document.getElementById('fact-4').innerText);

count1(data1, data1, 'fact-1');
count2(data2, data2, 'fact-2');
count3(data3, data3, 'fact-3');
count4(data4, data4, 'fact-4');
/* WORKING HOURS end */

/* EDUCATION start */
const education = new Education("education_box", educationData);
/* EDUCATION end */

/* HIRE ME start */
/* HIRE ME end */

/* OUR WORK start */
const gallery = new Gallery('work', portfolioData, PortfolioItem);
/* OUR WORK end */

/* OUR CLIENT start */
renderClient('#client_dynamic', clientData);
showSlides('#client_dynamic', clientData);

/* OUR CLIENT end */

/* TRUSTED BY start */
/* TRUSTED BY end */

/* SUBSCRIBE start */
/* SUBSCRIBE end */

/* OUR BLOG start */
/* OUR BLOG end */

/* GET IN TOUCH start */
/* GET IN TOUCH end */

/* FOOTER start */
/* FOOTER end */