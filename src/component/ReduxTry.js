import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { kalkulasi, reset } from "../redux/actions/counterActions";

function ReduxTry() {
  const count = useSelector((state) => state.counter.countRedux);

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(kalkulasi())}>Kalkulasi</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default ReduxTry;
