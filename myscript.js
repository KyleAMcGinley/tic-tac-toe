//Need to make module for gameboard
//Need to make a function to display the contents of the array
/*Need to make a function that changes the display of the grid
when a box is clicked. Need to obtain the data value of the box
when clicked and add it to the gameboard array. */
const gameboard = (() => {
    //Function for displaying gameboard array
    const boxes = document.querySelectorAll('div.box');

    gameBoardArray = ['', '', '', '', '', '', '', '', '', ];
    
    const assigningListener = (listener, event) => {
        for(let i = 0; i < boxes.length; i++){
            boxes[i].addEventListener(listener, event);
        }
    }

    const changingDisplayToX = () => {
        event.target.textContent = 'X';
    }

    const changingDisplayToO = () => {
        event.target.textContent = 'O';
    }

    const displayingGame = () => {
        for(let i = 0; i < boxes.length; i++){
        boxes[i].textContent = gameBoardArray[i];
        }
    }
    
    return {displayingGame, 
        changingDisplayToX, 
        assigningListener, 
        changingDisplayToO};
})();

gameboard.displayingGame();
gameboard.changingDisplayToX();

//Need object for players
const player = (name) => {
    const getName = () => name;
    const {changingDisplayToX} = gameboard();

    return {getName, changingDisplayToX};
};

const me = player('Kyle');