import './App.css';
import Game from "./components/Game"
import store from './components/counter/store'
import { Increment, Decrement } from "./components/counter/counterActions";
import { useSelector, useDispatch } from 'react-redux'

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
