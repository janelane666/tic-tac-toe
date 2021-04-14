import React, { Component } from "react"
import Cell from "./Cell"

export default class Board extends Component {
  handleClick = (i, j) => {
    console.log(this.props.isGameOver)
    if ((this.props.isGameOver) ||
        (this.props.board[i][j] === "x") ||
        (this.props.board[i][j] === "o")) {
      return
    }

    if (this.props.playerX) {
      this.props.board[i][j] = "x"
    } else {
      this.props.board[i][j] = "o"
    }

    const newMovesCount = this.props.moveCount + 1;

    this.props.sendData({
      board: this.props.board,
      playerX: !this.props.playerX,
      moveCount: newMovesCount,
      isGameOver: this.isGameOver(this.props.board, newMovesCount)
    })
  }

  isGameOver = (board, moveCount) => {
    return (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][2] !== " ") ||
           (board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][2] !== " ") ||
           (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][2] !== " ") ||
           (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[2][0] !== " ") ||
           (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[2][1] !== " ") ||
           (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[2][2] !== " ") ||
           (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] !== " ") ||
           (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[0][2] !== " ") ||
           (moveCount > 9)
  }

  render() {
      const allCells = this.props.board.map((row, x = 0) => {
        return (
          <div>{
            row.map((cell, y = 0) => {
            return (
              <Cell value={this.props.board[x][y]} i={x} j={y} handleClick={this.handleClick}/>
            )
          })}
          </div>
        )
        }
      )

    return (
      <div className="responsive-board">
        {allCells}
      </div>
    )
  }
}