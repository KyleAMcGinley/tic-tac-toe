//Need to make module for gameboard
//Need to make a function to display the contents of the array
/*Need to make a function that changes the display of the grid
when a box is clicked. Need to obtain the data value of the box
when clicked and add it to the gameboard array. */
const gameboard = (() => {

    gameBoardArray = ['', '', '', '', '', '', '', '', '', ];

    return {gameBoardArray};
})();

const displayingGameboard = (() => {

    const displayingGame = () => {
        for(let i = 0; i < boxes.length; i++){
        boxes[i].textContent = gameBoardArray[i];
        }
    }
    return {displayingGame}
})();


//Need object for controlling gameflow
const gameFlow = (() => {
    
    return {};
})();

//Need object for players that includes player's name, X or O choice, and whether going 1st or 2nd
const player = (name, XorO, playerTurn) => {
    const boxes = document.querySelectorAll('div.box');

    const getName = () => name;
    const getXorO = () => XorO;
    const getPlayerTurn = () => playerTurn;

    const displayingGame = () => {
        for(let i = 0; i < boxes.length; i++){
        boxes[i].textContent = gameBoardArray[i];
        }
    };

    const assigningListener = (listener, event) => {
        for(let i = 0; i < boxes.length; i++){
            boxes[i].addEventListener(listener, event);
        }
    };

    const changingDisplay = () => {
        const box = event.target.getAttribute('data-value');
        gameBoardArray.splice(box, 1, XorO);
        displayingGame();
    };

    assigningListener('click', changingDisplay);

    return {getName, getXorO, getPlayerTurn};
};

const firstPlayer = player('Other', 'O', 2);
const secondPlayer = player('Kyle', 'X', 1);
console.log(firstPlayer.getPlayerTurn())