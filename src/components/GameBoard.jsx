import { useState } from "react";

import mario from "../assets/mario.png";
import luigi from "../assets/luigi.ico";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const winMap = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

let player1Plays = [];
let player2Plays = [];
let stopGame = false;
let rounds = 1;

export default function GameBoard({onSelectSquare, symbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((previousGameBoard) => {
            const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
            
            if(updatedBoard[rowIndex][colIndex] == null && !stopGame) {
                updatedBoard[rowIndex][colIndex] = symbol;
                checkPlays(rowIndex, colIndex);

                onSelectSquare(stopGame);
            }

            rounds++;

            return updatedBoard;
        });
    }

    function checkPlays(rowIndex, colIndex) {
        const play = boardMap(rowIndex, colIndex);

        if(symbol == "X") {
            player1Plays.push(play);
            checkVictory(player1Plays);
        } else if(symbol == "O") {
            player2Plays.push(play);
            checkVictory(player2Plays);
        }
    }

    function checkVictory(plays) {
        const won = winMap.forEach(map => {
            let result = true;

            map.forEach(m => {
                if(!plays.includes(m)) {
                    result = false;
                }
            });

            if(result) {
                winner();
            }
        });

        if(rounds == 9 && !stopGame) {
            alert("We have a draw");
        }
    }

    function winner() {
        alert(symbol + " is the winner");
        stopGame = true;
    }

    function boardMap(rowIndex, colIndex) {
        if(rowIndex == 0 && colIndex == 0) {
            return 1
        } else if(rowIndex == 0 && colIndex == 1) {
            return 2
        } else if(rowIndex == 0 && colIndex == 2) {
            return 3
        } else if(rowIndex == 1 && colIndex == 0) {
            return 4
        } else if(rowIndex == 1 && colIndex == 1) {
            return 5
        } else if(rowIndex == 1 && colIndex == 2) {
            return 6
        } else if(rowIndex == 2 && colIndex == 0) {
            return 7
        } else if(rowIndex == 2 && colIndex == 1) {
            return 8
        } else if(rowIndex == 2 && colIndex == 2) {
            return 9
        }
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                         <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol == "X" ? <img height={100} src={mario}/> : playerSymbol == "O" ?  <img height={100} src={luigi}/> : null}</button>
                        </li>
                    ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}