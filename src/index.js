import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import counter from './reducers/counter'
import { Provider } from 'react-redux'

const store = createStore(counter)
store.subscribe(() => store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
