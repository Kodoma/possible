import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const env = process.env.NODE_ENV

const middleware = [ promise(), thunk ]

if (env === 'development') {
  const logger = require('redux-logger')
  middleware.push(logger())
}

const composeEnhancers = env !== 'production' ? composeWithDevTools : compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

const store = createStore(enhancer)

export default store
