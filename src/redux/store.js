import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// can push middlewares to array to scale in the future
const middlewares = [logger];

// applyMiddleware(...middlewares) is written as so to allow scalability
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
