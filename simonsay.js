let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let score = 0;
let h4 = document.querySelector("h4");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game has started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
  btn.classList.add("flash")
  setTimeout(function(){
    btn.classList.remove("flash")
  }, 250);
}

function userFlash(btn){
  btn.classList.add("userflash")
  setTimeout(function(){
    btn.classList.remove("userflash")
  }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h4.innerText = `level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randBtn);
  }

  function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
            score += 10;
            let count = document.querySelector(".score")
            count.innerText = score;
            console.log(score);
        }
    }else{
        h4.innerHTML = `"Game over! your scrore was <b>${level}</b> <br> press any key to start"`;
        document.querySelector("body").style.background = "red";
        setTimeout(function(){
            document.querySelector("body").style.background = "white";
        }, 150);
        reset();
    }
  }

function btnpress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}   

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}
