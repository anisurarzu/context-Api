import { createStore } from "redux";
import counter2Reducer from "./counter2/counter2Reducer";

const store = createStore(counter2Reducer);

export default store;
