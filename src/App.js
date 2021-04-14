import './App.css';
import Game from "./components/Game"

function App() {
  return (
    <div>
      <div className="header">
        <p>Welcome to my tic-toc game</p>
      </div>
      <div>
        <Game />
      </div>
    </div>
  );
}

export default App;
