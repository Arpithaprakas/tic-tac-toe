const playerform = document.getElementById("playerform")

const player1form = document.getElementById("player1")
const player2form = document.getElementById("player2")

const player1text = document.getElementById("player1text")
const player2text = document.getElementById("player2text")

const playerturn = document.getElementById("turn")

let turn = "";
let gameOver = false;

function showPlayer(event){
    event.preventDefault();
    // console.log(player1form.value);
    // console.log(player2form.value);
    player1text.innerText = "Player 1: " + player1form.value;
    player2text.innerText = "Player 2: " + player2form.value;
    playerturn.innerText = "TURN: " + turn;
}

const gridArr = []
// gridArr.forEach((box, index) => {
//     box = document.getElementById("box" + index)
//     gridArr.push(box)
// })

// let turn = ""

for(let i = 0; i < 9; i++){
    let box = document.getElementById("box" + i)
    gridArr.push(box)
}

gridArr.forEach((box, index) => {
    box.addEventListener("click", () => {
        // if(gridArr[index].innerText !== "") return
        // if(turn === ""){
        //     turn = "X"
        // } else if(turn === "X"){
        //     turn = "O"
        // } else {
        //     turn = "X"
        // }
        // // gridArr[index].innerText = turn;
        // gridArr[index].innerText = turn
        // checkWinner()
        if(gameOver) return;

        if(gridArr[index].innerText !== "") return;

        turn = turn === "X" ? "O" : "X";

        gridArr[index].innerText = turn
        checkWinner();
    })
})

const winningCombination = [
    [0,1,2], [3,4,5], [6,7,8],  //horizontal
    [0,3,6], [1,4,7], [2,5,8],  //vertical
    [0,4,8], [2,4,6]            // diagonals
]

function checkWinner(){
    let gridTexts = []
    for(let i = 0; i < 9; i++){
        gridTexts.push(gridArr[i].innerText)
        // console.log(gridTexts);
    }
    for(let winningArr of winningCombination){
        let a = gridTexts[winningArr[0]]
        let b = gridTexts[winningArr[1]]
        let c = gridTexts[winningArr[2]]

        if(a !== "" && a === b && a === c){
            console.log("Winner: " + a);
            playerturn.innerText = "Winner: " + a;
            gameOver = true;
               return; 
        }
    }
    if(!gridTexts.includes("")){
        console.log("Draw!");
        playerturn.innerText = "DRAW!";
        gameOver = true
        return;
    }
    playerturn.innerText = "TURN: " + (turn === "X" ? "O" : "X");
}
