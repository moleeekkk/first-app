import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  console.log("count ", count);

  return (
    <div>
      <div className="main">
        <button
          className="inp-btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <div className="counter">{count}</div>
        <button
          className="inp-btn"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
