"use strict"
let counter = 0
let countSec = 0
let countMin = 0
document.querySelector(".start").addEventListener("click", function () {
    const timerid = setInterval(i => {
        const tens = document.querySelector(".tens");
        const sec = document.querySelector(".sec");
        const min = document.querySelector(".min");
        tens.innerHTML = ++counter;
        if (tens.innerHTML == 99) {
            counter = 0;
            sec.innerHTML = ++countSec;
            if (sec.innerHTML == 59) {
                countSec = 0;
                min.innerHTML = ++countMin;
            }
        }
    });

    document.querySelector(".stop").addEventListener("click", function () {
  
        clearInterval(timerid)
})
document.querySelector(".reset").addEventListener("click", function () {
 location.reload();
})
})

let minString = min < 10 ? `0${min}`:min;
let secString = sec < 10 ? `0${sec}`:sec;
let tensString = tens < 10 ? `0${tens}`:tens;


timer.innerHTML =`${minstring}:${secString}:${tensString}` 
