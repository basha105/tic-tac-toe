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

    const endGame = () => {
        function checkX(cell) {
            return cell.getToken() == "X";
        }
        function checkO(cell) {
            return cell.getToken() == "O";
        }

        for (let i=0; i<rows; i++) {  // Check for 3 in a row
            let currentRow = board[i];
            let xRow = currentRow.filter(checkX);
            let oRow = currentRow.filter(checkO);

            if (xRow.length == 3 || oRow.length == 3) {
                console.log("3 in a row found!");
                break;
            }
        }

        let column0 = [];
        let column1 = [];
        let column2 = [];

        let columnArray = [column0, column1, column2];
        let currentCell;

        for (let i=0; i<rows; i++) {
            for (let j=0; j<columns; j++) {
                if (j == 0) {
                    currentCell = board[i][j];
                    column0.push(currentCell);
                }
                else if (j == 1) {
                    currentCell = board[i][j];
                    column1.push(currentCell);
                }
                else if (j == 2) {
                    currentCell = board[i][j];
                    column2.push(currentCell);
                }
            }
        }

        for (let i=0; i<columnArray.length; i++) {
            let currentColumn = columnArray[i];
            let xColumn = currentColumn.filter(checkX);
            let oColumn = currentColumn.filter(checkO);

            if (xColumn.length == 3 || oColumn.length == 3) {
                console.log("3 in a column found!");
                break;
            }
        }
    }

    return {
        printBoard, placeToken, endGame
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

const screenController = function screenController() {
    const container = document.getElementById("container");
    const boardDisplay = document.createElement("div");
    boardDisplay.id = "boardDisplay";

    for (let i=0; i<9; i++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        boardDisplay.appendChild(newSquare);
    }
    


    container.appendChild(boardDisplay);







    
}();

gameController.printNewRound();
gameController.playRound(0, 0);

gameController.printNewRound();
gameController.playRound(2, 1);

gameController.printNewRound();
gameController.playRound(1, 0);

gameController.printNewRound();
gameController.playRound(1, 2);

gameController.printNewRound();
gameController.playRound(2, 0)

gameController.printNewRound();

board.endGame();



















