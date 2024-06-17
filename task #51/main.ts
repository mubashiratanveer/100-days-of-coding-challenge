// Question 51: Refactoring to Arrow Functions: Take a simple function 
// that calculates the area of a rectangle and refactor it into an arrow function.

 function calculatesArea(width:number,heigth:number):number{
 return width*heigth
 };
let calculatesAreaArow=(width:number,heigth:number):number => width*heigth
console.log(calculatesAreaArow(8,9));

