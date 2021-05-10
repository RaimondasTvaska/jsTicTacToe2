// document laiko visa informacija

document.addEventListener('click', function(event) {
    var target = event.target
    
    markX(target);  
});


function markX(element){
    if (element.classList.contains("cell") && element.innerText == ""){
        element.innerText = "X";
        opponentMove();
     //element has special attribute){
        //edit attribute text to X
    }
    else {
        //Do nothing
    }
    //When pressed on square must be marked as X
}

function opponentMove(){
    // computer opponent makes a null

    //Get all possible moves
    let elements = Array.from(document.querySelectorAll(".cell"));
    elements = elements.filter(function(el){
        return el.innerText == ""
    });
    //Pick random element from possible moves
    //Mark that element as O


    let randomNo = randomInteger(0, elements.length);

    let selectedElement = elements[randomNo];

    selectedElement.innerText = "O";
}

function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function getRandomMove(){
    // analyses boards and calculates the next moves
}

function whoWon(){
    // analyses the lines and calculates the winner
}

function isGameFinished(){

}

function resetGame(){
    
}
