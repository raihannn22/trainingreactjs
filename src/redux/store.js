import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// Buat Redux store
const store = createStore(rootReducer);
export default store;
