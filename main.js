"use strict";

document.getElementById("happy").addEventListener("click", loop1);
document.getElementById("multiples").addEventListener("click", loop2);
document.getElementById("odd").addEventListener("click", loop3);
document.getElementById("series").addEventListener("click", loop4);
document.getElementById("decaseries").addEventListener("click", loop5);


//"I'm so happy!" loop
function loop1() {
    for (let num1 = 1; num1 <= 500; num1++) {
        console.log(num1);
        console.log("I'm so happy");
    }
}


//Multiples of 4 from 12 - 800
function loop2() {
    let num2 = 12;
    while (num2 <= 800) {
      console.log(num2);
      num2 +=4;
    }
}


//odd numbers from 55 to 11
function loop3() {
    let num3 = 11;
    while (num3 <=55) {
        console.log(num3);
        num3 += 2;
    }
}


//sum of the series: 5 + 6 + 7 + 8 + … + 48 + 49 + 50
function loop4() {
    let number4 = 0;
    for (let num4 = 5; num4 <= 50; num4++) {
        number4 += num4;
    }
    console.log(number4);
}


//sum of the series: 10 + 20 + 30 + … + 90 + 100
function loop5() {
    let number5 = 0;
    for (let num5 = 10; num5 <= 100; num5+= 10) {
        number5 += num5;
    }
    console.log(number5);
}