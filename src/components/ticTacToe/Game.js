import React, { Component } from "react"
import Board from "./Board"

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [" " , " ", " "],
        [" " , " ", " "],
        [" " , " ", " "]
      ],
      playerX: true,
      moveCount: 1,
      message: [" ", "you've won", "It's a tie"],
      isGameOver: false
    }
  }

  sendData = (boardData) => {

    this.setState({
      board: boardData.board,
      playerX: boardData.playerX,
      moveCount: boardData.moveCount,
      isGameOver: boardData.isGameOver
    })
  }

  newGame = () => {
    this.setState({
      board: [
        [" " , " ", " "],
        [" " , " ", " "],
        [" " , " ", " "]
      ],
      message: this.state.message[0],
      moveCount: 1,
      isGameOver: !this.state.isGameOver
    })
  }

  render() {
    return(
      <>
        <Board
          board={this.state.board}
          playerX={this.state.playerX}
          moveCount={this.state.moveCount}
          sendData={this.sendData}
          isGameOver={this.state.isGameOver}
        />
        <p>{this.state.playerX ? "x" : "o"}, it's your turn</p>
        <button className="new-game" onClick={this.newGame}>New Game</button>
        <p>{this.state.isGameOver ? "Game Over" : " "}</p>
      </>
    )
  }
}
