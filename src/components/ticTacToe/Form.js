import React, { Component } from "react"

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: " ",
      team: " "
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value  } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    alert('Welcome to the game')
    event.preventDefault()
  }

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="labels">
            <label>
              First Name
            </label>
            <label>
              Team
            </label>
          </div>
          <div className="inputs">
            <input
              value={this.state.firstName}
              type="text"
              name="firstName"
              onChange={this.handleChange}
            />
            <select
              name="team"
              value={this.state.team}
              onChange={this.handleChange}>
              <option value="x">x</option>
              <option value="o">o</option>
            </select>
            <button className="new-game" type="submit">Submit</button>
          </div>
        </form>
      </>
    )
  }
}