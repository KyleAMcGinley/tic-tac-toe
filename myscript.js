//Need to make module for gameboard
const gameboard = (() => {
    gameBoardArray = [];
})();

//Need object for players
const player = (name) => {
    const getName = () => name;

    return {getName};
};

const me = player('Kyle');