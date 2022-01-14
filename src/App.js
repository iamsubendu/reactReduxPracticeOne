import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";
//dispatch triggers the action

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container home">
        <h3>Increment/Decrement Counter</h3>
        <br />
        <p>Using React and Redux</p>
        <div className="quantity">
          <button
            className="qMinus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            -
          </button>
          <span className="input">{myState}</span>
          <button
            className="qPlus"
            title="Increment"
            onClick={() => dispatch(incNumber(5))}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
