import * as actions from './counterActions'

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case actions.Increment:
      return state + 1
    case action.Decrement:
      return state - 1
    default:
      return state
  }
}

export default counterReducer
