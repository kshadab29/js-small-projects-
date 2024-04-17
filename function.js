// let odd = function(n){
//        console.log(!(n%2 == 0));
// }

// let even = function(n){
//        console.log(n%2 == 0);
// }

// let oddOrEvenFactory = function(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//      }
//     }
//     else if(request == "even"){
//         return function(n){
//             console.log(n%2 == 0);
//      }
//     }
//     else{
//         console.log("wrong")
//     }
// }
// let request = "odd"
// oddOrEvenFactory();

const calc={
    add:function(a,b){
        return(a+b);
    },
    sub:function(a,b){
        return(a-b)
    },
    mul:function(a,b){
        return(a*b)
    }
};