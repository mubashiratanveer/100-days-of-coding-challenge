// Question 48: Combining Arrays with Spread Operator: Suppose you're 
// comparing prices of two different sets of laptops. Use the spread operator 
// to combine these arrays into a single array sorted in ascending order, then log the result.

let priceSet1=[1500,1600,1900];
let priceSet2=[1300,500,250]
let combinedArr=[...priceSet1,...priceSet2].sort((a,b)=>a-b)
console.log(combinedArr);

