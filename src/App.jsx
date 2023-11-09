import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayer() {
    setActivePlayer((player) => player == "X" ? "O" : "X");
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo initialName="Player 1" symbol="X" isActive={activePlayer}></PlayerInfo>
          <PlayerInfo initialName="Player 2" symbol="O" isActive={activePlayer}></PlayerInfo>
        </ol>

        <GameBoard onSelectSquare={handleActivePlayer} symbol={activePlayer}></GameBoard>
      </div>
    </main>
  )
}

export default App
