import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AllCandies from '../app/components/AllCandies'


import store from './store'
import Root from './components/root'

ReactDOM.render(
  <Provider store={store}>
      <Root />
  </Provider>,
  document.getElementById('main')
)
// <Route path="/candies" component={AllCandies} />
