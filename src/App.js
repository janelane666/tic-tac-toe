import './App.css'
import Game from "./components/ticTacToe/Game"
import NavBar from "./components/NavBar"
import ToDoList from "./components/toDoList/ToDoList"
import HomePage from "./components/HomePage"
import { Route, Switch } from "react-router-dom"
/*import Counter from "./components/counter/Counter"
import {Provider} from "react-redux";
import store from "./components/counter/store";*/

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
{/*          <Provider store={store}>
            <Route path="/counter" component={Counter} />
          </Provider>*/}
          <Route path="/tictoctoe" component={Game} />
          <Route path="/todolist" component={ToDoList} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>

      {/*<HomePage />
      <div className="tictoctoe">

        <div className="welcome">
          <p>Welcome to my tic-toc-toe game. Please fill out the form. Have a good game !</p>
        </div>
        <div className="game-ttt">
          <Game />
        </div>
      </div>

      <div className="to-do-list">
        <ToDoList />
      </div>*/}
    </div>
  );
}

export default App;
