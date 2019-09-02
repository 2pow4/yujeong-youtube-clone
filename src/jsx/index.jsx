import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from '../store/reducer'

import AppContainer from './container/appContainer.js'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
