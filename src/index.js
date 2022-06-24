import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import counter from './reducers/posts'
import { Provider } from 'react-redux'

const store = createStore(counter, applyMiddleware(ReduxThunk))
store.subscribe(() => store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
