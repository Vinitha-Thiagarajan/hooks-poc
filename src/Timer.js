import { useState, useEffect,memo } from "react";
import ReactDOM from "react-dom";

function Timer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  });

  return <h2 style={{color:"red "}}>Timer running {counter}!</h2>;
}
export default memo(Timer);