import {combineReducers, createStore} from "redux";
import tracksReducer from "./track-reducer";


let reducers = combineReducers({
    tracksPage: tracksReducer
});

let store = createStore(reducers);

window.store = store;

export default store;