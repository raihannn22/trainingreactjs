import LocalStore from "../../store/zustand/LocalStore";
import { Kalkulasi, Reset } from "../actions/counterActions";

const initialState = {
  countRedux: localStorage.getItem("countRedux") || 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case Kalkulasi:
      localStorage.setItem("countRedux", state.countRedux * 2 + 25);
      return { ...state, countRedux: state.countRedux * 2 + 25 };
    case Reset:
      return { ...state, countRedux: 0 };
    default:
      return state;
  }
};
export default countReducer;
