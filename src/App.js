import './App.css';
import Game from "./components/ticTacToe/Game"
import NavBar from "./components/NavBar"
import Form from "./components/ticTacToe/Form"

function App() {
  return (
    <div>
      <NavBar className="navbar"/>
      <div className="header">
        <Form />
        <p>Welcome to my tic-toc game</p>
      </div>
      <div>
        <Game />
      </div>
    </div>
  );
}

export default App;
