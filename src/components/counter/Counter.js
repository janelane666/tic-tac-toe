import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from "./actions"


const Counter = React.createClass({
  displayName: 'Counter',

  render() {
    const { increment, decrement, restart, count } = this.props

    return (
      <div>
        <div>{count}</div>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => restart()}>+</button>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    count: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)