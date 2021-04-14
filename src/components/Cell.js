import React, { Component } from "react"

export default class Cell extends Component {
  render() {
    return(
      <div>
        <div className="col" onClick={() => this.props.handleClick(this.props.i, this.props.j)}>
          {this.props.value}
        </div>
      </div>
    )
  }
}