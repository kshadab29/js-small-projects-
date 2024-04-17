// let btn  = document.querySelector("button");

//  btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let random = getRandomColor();
//     h3.innerHTML = random;

//     let div = document.querySelector("div");
//     div.style.background = random;
//  })

//  function getRandomColor(){
//     let red  = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue  = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let div = document.querySelector("div");

// div.addEventListener("mouseout", function(){
//     console.log(`you have mouseout from ${div}`);
// })

// let inp = document.querySelector("input");

// inp.addEventListener("keypress", function(e){
//     console.dir(e)
// })

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(e){
//     e.preventDefault();
//     btn.style.background = "green";
//     console.log("button clicked");
// })
let inp = document.querySelector("input");
inp.addEventListener("input", function () {
  console.log(inp.value);
  let h3 = document.querySelector("h3");
  if (this.value == "shadab khan") {
    h3.innerText = this.value;
  } else {
    console.log("your are entering wrong characters");
  }
});
