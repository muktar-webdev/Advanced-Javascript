// const numbers = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];

//     if(numbers[i] > 6){
//         break;
//     }
//     // console.log(element);
// }


// --2nd try--//
const numbers = [1,-2,3,-4,5,-6,7,-8,9,-10];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];

    if(numbers[i] < 0){
        continue;
    }
    console.log(element);
}