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
      message: ["you've won", "It's a tie"],
      isLoading: true
    }
  }

  sendData = (boardData) => {

    this.setState({
      board: boardData.board,
      playerX: boardData.playerX,
      moveCount: boardData.moveCount
    })
  }

  winning = () => {
    let b = this.state.board

    if (
      (b[0][0] === b[0][1] && b[0][1] === b[0][2] && b[0][2] !== " ") ||
      (b[1][0] === b[1][1] && b[1][1] === b[1][2] && b[1][2] !== " ") ||
      (b[2][0] === b[2][1] && b[2][1] === b[2][2] && b[2][2] !== " ") ||
      (b[0][0] === b[1][0] && b[1][0] === b[2][0] && b[2][0] !== " ") ||
      (b[0][1] === b[1][1] && b[1][1] === b[2][1] && b[2][1] !== " ") ||
      (b[0][2] === b[1][2] && b[1][2] === b[2][2] && b[2][2] !== " ") ||
      (b[0][0] === b[1][1] && b[1][1] === b[2][2] && b[2][2] !== " ") ||
      (b[2][0] === b[1][1] && b[1][1] === b[0][2] && b[0][2] !== " ")
    ) {
      return (
        <p>
          {this.state.playerX ? "o" : "x"}, {this.state.message[0]}
        </p>
      )
    } else if (this.state.moveCount > 9) {
      return (
        <p>{this.state.message[1]}</p>
      )
    }
  }

  newGame = () => {
    this.setState({
      board: [
        [" " , " ", " "],
        [" " , " ", " "],
        [" " , " ", " "]
      ]
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
        />
        <div>{this.winning()}</div>
        <p>{this.state.playerX ? "x" : "o"}, it's your turn</p>
        <button onClick={this.newGame}>New Game</button>
      </>
    )
  }
}