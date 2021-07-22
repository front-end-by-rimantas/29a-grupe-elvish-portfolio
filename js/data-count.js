"use strict";

let i = 0;
let j = 0;
let k = 0;
let l = 0;

function count1(data, smallData, selector) {
    if (smallData < 0) {
        document.getElementById(selector).innerHTML = data;
        return;
    }
    const minus = data / 320;
    setTimeout(function(){
        document.getElementById(selector).innerHTML = i;
        i > 150 ? i = i + 3 :
        i = i + 1;
        count1(data, smallData-minus, selector);
    }, 0);
}

function count2(data, smallData, selector) {
    if (smallData < 0) {
        document.getElementById(selector).innerHTML = data;
        return;
    }
    const minus = data / 320;
    setTimeout(function(){
        document.getElementById(selector).innerHTML = j;
        j = j + 21;
        count2(data, smallData-minus, selector);

    }, 0);
}

function count3(data, smallData, selector) {
    if (smallData < 0) {
        document.getElementById(selector).innerHTML = data;
        return;
    }
    const minus = data / 320;
    setTimeout(function(){
        document.getElementById(selector).innerHTML = k;
        k = k + 7;
        count3(data, smallData-minus, selector);

    }, 0);
}

function count4(data, smallData, selector) {
        if (smallData < 0) {
            document.getElementById(selector).innerHTML = data;
            return;
        }
        const minus = data / 320;
        setTimeout(function(){
            document.getElementById(selector).innerHTML = l;
            l > 150 ? l = l + 3 :
            l = l + 1;
            count4(data, smallData-minus, selector);

        }, 0);
}

export { count1, count2, count3, count4 };