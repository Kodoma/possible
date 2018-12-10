import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Home from './components/Home'
import List from './components/List'
import store from './store'

require('./../styles/main.scss')

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={Home} />  
        <Route path="/books" component={List}>
          <Route path="/books?title=:search" component={List} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  app
)
