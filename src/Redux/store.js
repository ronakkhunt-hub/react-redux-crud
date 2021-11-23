import { createStore } from "redux";
import reducers from "./Reducer/mainReducer";

const store = createStore(reducers)

export default store