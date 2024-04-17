// let arr = [5, 5, 5, 5]

// let sum = arr.reduce((sum, el) =>{
//     return sum+el
// });

// let avg2 = sum / arr.length;
//     console.log(avg2)

// MAP METHOD
// let number = [1, 2, 3, 4, 5]
// let newnum = number.map((number)=> number +5);

// let string  = ["shadab", "khan"]
// let upname = string.map((strings)=>strings.toUpperCase());
// console.log(upname);

// let doubleAndReturnArgs = (arr, ...agrs)=>[
//     ...arr,
//     ...agrs.map((v)=> v* 2 )
// ];

// console.log(doubleAndReturnArgs)

let mergeObjects = (obj1, obj2)=>({...obj1, ...obj2});

mergeObjects = ({a:1, b:2}, {c:3, d:4});
console.log(...obj1)
console.log(mergeObjects);