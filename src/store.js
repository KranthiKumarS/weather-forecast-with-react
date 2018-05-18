import { createStore, applyMiddleware, compose } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    createLogger()
  ]

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  )

export default store
