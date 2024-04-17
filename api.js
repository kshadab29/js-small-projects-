// let url = "https://catfact.ninja/fact";
// let dog = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let image = await getResponse();
//   console.log(image);
//   let img = document.querySelector("#img");
//   img.setAttribute("src", image);
// });

// async function getResponse() {
//   try {
//     let res = await axios.get(dog);
//     return res.data.message;
//   } catch (err) {
//     return "No result found", err;
//   }
// }

// fetch(url)
// .then((res)=>{
//   return res.json();
// })
// .then((data)=>{
//  console.log(data.fact)
//  return fetch(url)
// })
// .then((res)=>{
//    return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })

let collage = "http://universities.hipolabs.com/search?name=india&state-province=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let state = document.querySelector("input").value;
  let colg = await getCollages(state);
  show(colg);
});

function show(colg) {
  let list = document.querySelector("#list");
  list.innerText = ""
  for (col of colg) {
    console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getCollages(state) {
  try {
    let clg = await axios.get(collage + state);
    return clg.data;
  } catch (err) {
    return [];
  }
}

