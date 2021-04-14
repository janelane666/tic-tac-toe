import React, { Component } from "react"
import Cell from "./Cell"

export default class Board extends Component {
  handleClick = (i, j) => {
    if (this.props.board[i][j] === " ") {
      if (this.props.playerX) {
        this.props.board[i][j] = "x"
      } else {
        this.props.board[i][j] = "o"
      }
    } else if (this.props.board[i][j] === "x" || this.props.board[i][j] === "o") {
      return this.props.board[i][j]
    }

    this.props.sendData({
      board: this.props.board,
      playerX: !this.props.playerX,
      moveCount: this.props.moveCount + 1
    })
  }

    render() {
      const allCells = this.props.board.map((row, x = 0) => {
        return (
          <div>{
            row.map((cell, y = 0) => {
            return (
              <Cell value={this.props.board[x][y]} i={x} j={y} handleClick={this.handleClick} />
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

  /*

      const allCells = this.props.board.map((row, x = 0 ) => {
        return(
          <div>
            <div className="row">
              <Cell value={this.props.board[0][x]} i={0} j={x} handleClick={this.handleClick} />
            </div>
            <div className="row">
              <Cell value={this.props.board[1][x]} i={1} j={x} handleClick={this.handleClick} />
            </div>
            <div className="row">
              <Cell value={this.props.board[2][x]} i={2} j={x} handleClick={this.handleClick} />
            </div>
          </div>
        )
      })*/
}