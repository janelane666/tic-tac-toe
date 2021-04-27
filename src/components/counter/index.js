import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Counter from './Counter';
import store from './store'

const App = React.createClass({
  displayName: 'HOC',

  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
});

render(<App />, document.getElementById('root'));