import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AllCandies from './components/AllCandies'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import store from './store'
import Root from './components/root'

ReactDOM.render(
  <Provider store={store}>
      <Root />
  </Provider>,
  document.getElementById('main')
)