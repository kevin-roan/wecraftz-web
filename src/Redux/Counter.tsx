import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  indexReducer,
} from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const [formData, setFormdata] = useState("");

  const count = useSelector((state) => state.counter.value);
  console.log(
    "this contains the value of counter",
    useSelector((state) => state.counter.value)
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by amount"
          onClick={() => dispatch(indexReducer(400))}
        >
          Increment by amount
        </button>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> Submit</button>
      </div>
    </div>
  );
}
