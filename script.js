const board = function Gameboard() { // Defined gameboard here
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i=0; i<rows; i++) {
        board[i] = [];
        for (let j=0; j<columns; j++) {
            board[i].push(Cell());
        }
    }

    const printBoard = () => {
        for (let i=0; i<rows; i++) {
            for (let j=0; j<columns; j++) {
                console.log("Row: "+ String(i) + " Column: " + String(j) + " Value: " + String(board[i][j].getToken()));
            }
        }
    }

    const placeToken = (row, column, player) => {
        let desiredCell = board[row][column];
        if (String(desiredCell.getToken()) == "empty") {
            desiredCell.addToken(player.token);
            console.log("Token placed.");
        }

        else {
            console.log("Cannot place token, slot is taken.");
        }

    }

    return {
        printBoard, placeToken
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

const gameController = function gameController( // Defined gamecontroller here
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
        console.log(`Placing ${getActivePlayer().name}'s token ${getActivePlayer().token} into row ${row}, column ${column}`);
        board.placeToken(row, column, getActivePlayer());
        switchPlayerTurn();

    }

    return {
        getActivePlayer,
        switchPlayerTurn,
        printNewRound,
        playRound
    }
}();

gameController.printNewRound();
gameController.playRound(0, 0);

gameController.printNewRound();
gameController.playRound(0, 1);

gameController.printNewRound();














