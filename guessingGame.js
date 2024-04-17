const max = prompt("Enter the Max Number")
const random = Math.floor(Math.random()*max) + 1
let guess = prompt("Guess The Number");

while(true){
       if( guess == "quit"){
         console.log("You quit")
         break;
       }
       
       if(guess == random){
        console.log(`Congrats..you guessed right The Number is.. ${random} `)
       }
       else if( guess < random){
        guess = prompt("HINT:Your Gussed was too small...try larger number");
       }
       else{
        guess = prompt("HINT:Your Gussed was too big...try smaller number");
       }

}
