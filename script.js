// document laiko visa informacija
let playerWinscore = 0;

document.addEventListener('click', function(event) {
    var target = event.target
    
    markX(target);  
});

function resetGame(){

    // all board cells should be empty;
    let cells = Array.from(document.getElementsByClassName("cell"));

    cells.forEach(x => x.innerText = "");

    //game status text should be empty;
    var gameStatusElement = document.querySelector(".game--status");
            
    gameStatusElement.innerText = '';


}


    // modify button html element to include onclick


function markX(element){
    if (element.classList.contains("cell") 
    && element.innerText == ""
        && !isGameFinished()){
        element.innerText = "X";

        let finished = isGameFinished();

        if (finished == false){
            opponentMove();
            isGameFinished();
        }
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
    let cells = Array.from(document.getElementsByClassName("cell"));
        cells = cells.filter(cell => cell.innerText == "");
        
    //Pick random element from possible moves
    //Mark that element as O


    //let randomNo = randomInteger(0, elements.length - 1);
    let randomNumber = Math.floor(Math.random() * (cells.length));

    //let selectedElement = elements[randomNo];
    let randomCell = cells[randomNumber];

    //selectedElement.innerText = "O";
    randomCell.innerText = 'O'
}



function isGameFinished(){
    return isWinnerDetermined() || noMovesLeft();

}

function noMovesLeft(){
    //1. we no longer have a move
    let cells = Array.from(document.getElementsByClassName("cell"));
    cells = cells.filter(cell => cell.innerText == "");
    if (cells.length == 0){
        // modify game status to be draw
        var gameStatusElement = document.querySelector(".game--status");

        gameStatusElement.innerText = "Draw";

        return true;
    }

    return false;
}


function isWinnerDetermined(){
    let winningCellCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

        let isWinnerDetermined = false;
        winningCellCombinations.forEach(combination =>{
        
        
        //go through there winning combinations
        
            elementValue1 = getDataCellTextValueByIndex(combination[0]);
            elementValue2 = getDataCellTextValueByIndex(combination[1]);
            elementValue3 = getDataCellTextValueByIndex(combination[2]);

        
            if (elementValue1 == elementValue2 && elementValue2 == elementValue3 && elementValue1 != ""){
            
                var gameStatusElement = document.querySelector(".game--status");

                if (elementValue1 == 'X'){
                    playerWinscore++;
                }
            
                gameStatusElement.innerText = `${elementValue1} has won the game`
            
                isWinnerDetermined = true;
            }

        });
        
        
    
        return isWinnerDetermined;
}
        //Get all cells of those attibute values
        //Check all the elements have a same inner text (X or O)
        //Carefull of empty values
        
        
        //2. we have 3 X or 3 O in a row, column or diagonal

function getDataCellTextValueByIndex(index){
    return document.querySelector(`[data-cell-index="${index}"]`).innerText;
}
