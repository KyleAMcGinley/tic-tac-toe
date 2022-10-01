//Need to make module for gameboard
//Need to make a function to display the contents of the array
const gameboard = (() => {
    const boxes = document.querySelectorAll('div.box');
    gameBoardArray = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    const displayingGame = () => {
        for(var i = 0; i < boxes.length; i++){
        boxes[i].textContent = gameBoardArray[i];
        }
    }
    return {displayingGame};
})();

gameboard.displayingGame();

//Need object for players
const player = (name) => {
    const getName = () => name;

    return {getName};
};

const me = player('Kyle');