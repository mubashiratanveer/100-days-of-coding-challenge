"use strict";
// Question 51: Refactoring to Arrow Functions: Take a simple function 
// that calculates the area of a rectangle and refactor it into an arrow function.
function calculatesArea(width, heigth) {
    return width * heigth;
}
;
let calculatesAreaArow = (width, heigth) => width * heigth;
console.log(calculatesAreaArow(8, 9));
