//Need to make module for gameboard
//Need to make a function to display the contents of the array
/*Need to make a function that changes the display of the grid
when a box is clicked. Need to obtain the data value of the box
when clicked and add it to the gameboard array. */
const gameboard = (() => {
    //Function for displaying gameboard array
    const boxes = document.querySelectorAll('div.box');

    gameBoardArray = ['', '', '', '', '', '', '', '', '', ];

    const displayingGame = () => {
        for(let i = 0; i < boxes.length; i++){
        boxes[i].textContent = gameBoardArray[i];
        }
    }
    
    return {displayingGame};
})();

gameboard.displayingGame();

//Need object for players
const player = (name) => {
    const boxes = document.querySelectorAll('div.box');

    const getName = () => console.log(name);

    const assigningListener = (listener, event) => {
        for(let i = 0; i < boxes.length; i++){
            boxes[i].addEventListener(listener, event);
        }
    }

    const changingDisplayToX = () => {
        const box = event.target.getAttribute('data-value');
        gameBoardArray.splice(box, 1, 'X');
        displayingGame();
    }

    const changingDisplayToO = () => {
        const box = event.target.getAttribute('data-value');
        gameBoardArray.splice(box, 1, 'O');
        displayingGame();
    }

    const displayingGame = () => {
        for(let i = 0; i < boxes.length; i++){
        boxes[i].textContent = gameBoardArray[i];
        }
    }

    return {getName, displayingGame, assigningListener,
    changingDisplayToO, changingDisplayToX};
};

const playerO = player('Kyle');
const playerX = player('Other')
playerO.assigningListener('click', playerO.changingDisplayToO);
playerX.assigningListener('click', playerX.changingDisplayToX)