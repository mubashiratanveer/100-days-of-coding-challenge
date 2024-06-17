//Question 47: Advanced Array Destructuring: Given an array of objects representing different
// laptops, each with properties make, model, and year, use array destructuring to assign the 
// first and second laptops to variables. Then, log these variables.
let laptop=[
    {make:"Dell", model:"XPS 15", year:"2022"},
    {make:"hp", model:"spectre x360", year:"2021"},
    {make:"apple", model:"MacBook", year:"2020"}
];
let [laptop1,laptop2,laptop3]=laptop
console.log(laptop1);
console.log(laptop2);

