const students =[
    {id:21, name :"Nishat"},
    {id:22, name :"Hasan"},
    {id:23, name :"Muktar"},
    {id:24, name : "Mukarrom"}
]


// --findout the name-property from object- using for loop-//
for(let i = 0; i < students.length; i++){
    const element = students[i];
    const object = element.name;
    // const result = name.push(object);
    console.log(object);
}

// --using map--//
const names = students.map( std => std.name);   //--std - (define each element of students array)
const ids = students.map(std => std.id);

// --Using filter()--//
const biggerId = students.filter(std => std.id > 21)

// --using find()--//
const biggerId2 = students.find(std => std.id > 21)

console.log(biggerId2);