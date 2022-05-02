import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import elementsReducer from "./elements-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    elements: elementsReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;