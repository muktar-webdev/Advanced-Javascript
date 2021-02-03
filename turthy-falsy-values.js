// // ---falsy-Values---
// 1.0
// 2.undefined
// 3.null
// 4.""    // empty-string

// // ---truthy-Values--//
// 1." "     //whitespace-string
// 2.all Numbers    // except 0
// 3.all string    //except empty-string
// 4.[]   epmty Array
// 5.{}   empty Object


const numbers = null;
// console.log(numbers);

if(numbers){
    console.log("Conditions is True");
}
else{
    console.log("Conditions is false")
}