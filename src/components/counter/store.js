import { createStore } from 'redux'
import counterReducer from './counterReducer'

const store = createStore(counterReducer)

export default store

// the store would always only contains this ? Is there any case where the store would hold actual data ?