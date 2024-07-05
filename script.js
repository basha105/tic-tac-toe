const board = function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i=0; i<rows; i++) {
        board[i] = [];
        for (let j=0; j<columns; j++) {
            board[i].push(Cell());
        }
    }XMLDocument

    const printBoard = () => {
        for (let i=0; i<rows; i++) {
            for (let j=0; j<columns; j++) {
                console.log("Row: "+ String(i) + "Column: " + String(j) + "Value: " + String(board[i][j].getValue));
            }
        }
    }

    const placeToken = (row, column, player) => {
        let desiredCell = board[row][column];
        if (desiredCell.getToken == "empty") {
            desiredCell.addToken(player.token);
        }

        else {

        }

    }

    return {
        printBoard
    };
}();

function Cell() {
    let value = "empty";

    const addToken = (shape) => {
        value = shape;
    };

    const getToken = () => value;

    return {
        addToken,
        getToken
    };
}

function gameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const players = [
        {
            name: playerOneName,
            token: "X"
        },
        {
            name: playerTwoName,
            token: "O"
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        if (activePlayer == players[0]) {
            activePlayer = players[1];
        }
        else {
            activePlayer = players[0];
        }
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    }

    const playRound = (row, column) => {
        console.log(`Placing ${getActivePlayer.name}'s token ${getActivePlayer.token} into row ${row}, column ${column}`);

    }



}