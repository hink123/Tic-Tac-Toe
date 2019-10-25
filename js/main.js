/*----- constants -----*/

const PLAYER_X = 1;
const PLAYER_O = -1;
const EMPTY = 0;

const COLORS = {
    null: 'red',
    '1': 'green',
    '-1': 'purple'
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

//winner if add up to |3|
// board = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]

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
        gameMessage.textContent = `It is player ${turn} turn`;
    } else if (winner === 'T') {
        gameMessage.textContent = 'It is a tie!';
    } else {
        gameMessage.textContent = "Someone Won"
    }
}

function playerMove(evt) {
    let sqrClicked = evt.target;
    if (sqrClicked.tagName !== 'DIV') {
        return;
    }
    
    console.log(sqrClicked);
}