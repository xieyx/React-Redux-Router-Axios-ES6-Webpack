import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from '../middleware/promiseMiddleware'
import rootReducer from '../reducers'

export default function configureStore (initialState) {
  const enhancer = compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return createStore(
    rootReducer,
    initialState,
    enhancer,
  )
}
