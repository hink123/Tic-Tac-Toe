/*----- constants -----*/

const PLAYER_X = 1;
const PLAYER_O = -1;
const EMPTY = 0;

/*----- app's state (variables) -----*/
let turn, winner, board;


/*----- cached element references -----*/

const replayBtn = document.querySelector('button');

/*----- event listeners -----*/



/*----- functions -----*/

init();

//winner if add up to |3|
// board = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]

function inti() {
    board = [
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY]
    ];
    turn = PLAYER_X;
    winner = '';
}
