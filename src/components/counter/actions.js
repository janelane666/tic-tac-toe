import * as actions from './actionTypes';

export function increment() {
  return {
    type: actions.INCREMENT
  }
}

export function decrement() {
  return {
    type: actions.DECREMENT
  }
}

export function restart() {
  return {
    type: actions.RESTART
  }
}

// I don't really see the point of this file