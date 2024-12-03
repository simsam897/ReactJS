import React, { useContext } from "react";
import { CounterContext } from "../context";

const Counter = () => {
  const counterState = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => counterState.setCount(counterState.count + 1)}>increment</button>
      <button onClick={() => counterState.setCount(counterState.count - 1)}>decrement</button>
    </div>
  );
};

export default Counter;