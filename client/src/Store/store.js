import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers/reducer.js";
import thunk from "redux-thunk";

 /* const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    
    )

    export default store; */
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
    );
    export default store;