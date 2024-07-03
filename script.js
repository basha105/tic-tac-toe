let board = function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i=0; i<rows; i++) {
        board[i] = [];
        for (let j=0; j<columns; j++) {
            board[i].push(Cell());
        }
    }
}();

function Cell() {
    let value = "empty";

    const addToken = (shape) => {
        value = shape;
    };

    const getValue = () => value;

    return {
        addToken,
        getValue
    };
}