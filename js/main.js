/*----- constants -----*/

const PLAYER_X = 1;
const PLAYER_O = -1;
const WINNING_TOTAL = 3;

const COLORS = {
    null: 'white',
    '1': 'orange',
    '-1': 'purple'
};

const PLAYER = {
    '1': "Player X",
    '-1': "Player O"
};

const WINNINGCOMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*----- app's state (variables) -----*/
let turn, winner, board;


/*----- cached element references -----*/

const replayBtn = document.querySelector('button');
const squares = document.querySelectorAll('div');
const gameMessage = document.querySelector('h2');

/*----- event listeners -----*/

document.querySelector('section').addEventListener('click', playerMove);
replayBtn.addEventListener('click', init)

/*----- functions -----*/

init();

// Initialize the board
function init() {
    
    board = [
        null, null, null,
        null, null, null,
        null, null, null
    ];
    turn = PLAYER_X;
    winner = null;

    render();
}

function render() {

    // Sets the color for each square
    squares.forEach(function(e, idx) {
        e.style.backgroundColor = `${COLORS[`${board[idx]}`]}`
    })
    
    if (winner === null) {
        gameMessage.textContent = `It is ${PLAYER[turn]} turn`;
    } else if (winner === 'T') {
        gameMessage.textContent = 'It is a tie!';
    } else {
        gameMessage.textContent = `${PLAYER[winner]} won!`
    }
}

function playerMove(evt) {
    let sqrClicked = evt.target;
    
    //Checking if a div was clicked
    if (sqrClicked.tagName !== 'DIV') {
        return;
    }

    //Extracting the the square's ID
    let sqrId = sqrClicked.getAttribute('id')
    
    //Checking if the square was already clicked
    if (board[sqrId] !== null) {
        return;
    }

    //Checking for a winner
    if (winner !== null) {
        return;
    }
    
    //Updating the board
    board[sqrId] = turn;

    // Adding X or Y
    if (turn === PLAYER_X) {
        sqrClicked.textContent = "X";
    } else {
        sqrClicked.textContent = "O";
    }
    
    //Check Winner
    checkWinner();

    //Change turns
    turn = turn*-1;
    
    render();
}

function checkWinner() {
    for (let i = 0; i < WINNINGCOMBOS.length; i++) {
        var total = 0;
        for (let y = 0; y < WINNINGCOMBOS[i].length; y++) {
            total += board[WINNINGCOMBOS[i][y]];
        }
        total = Math.abs(total);
        
        if (total === WINNING_TOTAL) {
            winner = turn;
            break;
        } 
        
    }
    if (total !== WINNING_TOTAL && !board.includes(null)) {
        return winner = 'T';
    }
}