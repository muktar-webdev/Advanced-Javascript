const numbers=[3,4,5,6,7,8,9,10];
// const square = [];

// // --normal way--//
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     square.push(result);
// }

// // --map--//
// const result = numbers.map(function(element){
//     // console.log(element);
//     return element * element + 10;
// })
// console.log(result);


// const result2 = numbers.map(element => element * element);
// console.log(result2);


// --filter()--//

const bigger = numbers.filter(element => element > 5);
const evenNumber = numbers.filter(element => element % 2 == 0)
const oddNumber = numbers.filter(element => element % 2 != 0)

console.log("Big:", bigger, "Even:", evenNumber, "Odd:", oddNumber);


// --filter--//
const biggerNumber = numbers.find(element => element > 5);
console.log(biggerNumber);




