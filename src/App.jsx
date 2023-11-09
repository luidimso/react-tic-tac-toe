import PlayerInfo from "./components/PlayerInfo";

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo initialName="Player 1" symbol="X"></PlayerInfo>
          <PlayerInfo initialName="Player 2" symbol="O"></PlayerInfo>
        </ol>

        GAME BOARD
      </div>
    </main>
  )
}

export default App
