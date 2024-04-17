// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "shadab khan",
//   () => {
//     console.log("shadab data is saved");
//     savetoDb(
//       "zainy",
//       () => {
//         console.log("zainy's data also saved");
//         savetoDb(
//           "shradhha",
//           () => {
//             console.log("shradhha's data is saved");
//           },
//           () => {
//             console.log("shradha's data is not saved due to weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("zainy's data is not saved due to weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("shadab data not saved due to weak connection");
//   }
// );

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("promise is resolved connection is good");
//     } else {
//       reject("promised is rejected due to weak connection");
//     }
//   });
// }

// savetoDb("zainy")
//   .then((result) => {
//     console.log("data 1 saved: promise resolved");
//     console.log(result)
//     return savetoDb("shadab")
//   })
//   .then((result) => {
//     console.log("data 2 saved");
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log("promise rejected");
//     console.log(error)
//   });

let h2 = document.querySelector("h2");
function changeColor(color, delay){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      h2.style.color = color
      resolve("color is changed")
    },delay)
  })
}



async function demo(){
  await changeColor("red", 1000)
  await changeColor("green", 1000)
  await changeColor("blue", 1000)
  await changeColor("yellow", 1000)
  await changeColor("blue", 1000)
}
let result = demo();

// changeColor("red",1000)
// .then(()=>{
//   console.log("color changed to red")
//   return changeColor("blue", 1000)
// })
// .then(()=>{
//   console.log("color changed to blue")
//   return changeColor("yellow", 1000)
// })
// .then(()=>{
//   console.log("color changed to yellow")
//   return changeColor("purple", 1000)
// })
// .then(()=>{
// console.log("color is changed to purple")
// })
// .catch(()=>{
//   console.log("color is not changed")
// })

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num)
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
// }
