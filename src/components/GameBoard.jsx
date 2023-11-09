import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex, symbol) {
        setGameBoard((previousGameBoard) => {
            const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = symbol;

            console.log(updatedBoard);

            return updatedBoard;
        })
    }

    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                         <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex, "X")}>{playerSymbol}</button>
                        </li>
                    ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}