import logger from "redux-logger";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
