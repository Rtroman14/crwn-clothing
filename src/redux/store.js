import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; // for storing cart items in local storage
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// can push middlewares to array to scale in the future
const middlewares = [logger];

// applyMiddleware(...middlewares) is written as so to allow scalability
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// for storing cart items in local storage
export const persistor = persistStore(store);

export default { store, persistor };
