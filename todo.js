let todo = [];


let req =  prompt("Enter Your Request");

while(true){
    if(req == "quit"){
        console.log("You Quit")
        break;
    }

    if(req == "list"){
        console.log("===================")
        for(i=0; i<todo.length; i++){
            console.log(i, todo[i])
        }
        console.log("===================")
    }
    else if(req == "add"){
     let task = prompt("enter your task to add in list")
     todo.push(task);
     console.log("Your task is added to the list")
    }
    else if( req == "delete"){
        let idx = prompt("Enter the index you want to delete")
        todo.splice(idx, 1)
        console.log("task deleted")
    }
    else{
        console.log("wrong request")
    }
    req =  prompt("Enter Your Request");

    


}