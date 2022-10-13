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


//Need object for controlling gameflow
const gameFlow = (() => {
    //Need to get value of X and O values in the array
    const boxes = document.querySelectorAll('div.box');
    let sumTotal = 0;
    const getValuesInArray = (value) =>{
        if(value === 'X' || value === 'O'){
            sumTotal += 1;
        }
    }

    const resetSum = () => sumTotal = 0;

    const test = () => {
        for(let i = 0; i < gameBoardArray.length; i++){
            getValuesInArray(gameBoardArray[i]);
        } return console.log(sumTotal)
    }

    const assigningListener = (listener, event) => {
        for(let i = 0; i < boxes.length; i++){
            boxes[i].addEventListener(listener, event);
        }
    }

    const removingEventListener = () => {
        const box = event.target
        box.removeEventListener('click', changingDisplayToO)
    }

    const changingDisplayToX = () => {
        const box = event.target.getAttribute('data-value');
        gameBoardArray.splice(box, 1, 'X');
        displayingGame();
        resetSum();
        test();
    }

    const changingDisplayToO = () => {
        const box = event.target.getAttribute('data-value');
        gameBoardArray.splice(box, 1, 'O');
        displayingGame();
        resetSum();
        test();
        removingEventListener();
    }

    const displayingGame = () => {
        for(let i = 0; i < boxes.length; i++){
        boxes[i].textContent = gameBoardArray[i];
        }
    }

    return {test, changingDisplayToO, assigningListener, changingDisplayToX, displayingGame};
})();

gameFlow.assigningListener('click', gameFlow.changingDisplayToO)

//Need object for players
const player = (name) => {
    const getName = () => console.log(name);

    return {getName};
};

const playerO = player('Kyle');
const playerX = player('Other');