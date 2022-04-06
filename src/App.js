import { useState, useCallback ,lazy, Suspense ,useEffect, useMemo} from "react";
import ReactDOM from "react-dom";
import  ChildCounter from "./ChildCounter";
import Timer from "./Timer";
import "./App.css";
import ImperativeParentExample from "./ImperativeParentExample";

const Lazy = lazy(() => import("./Lazy"));
const App = () => {
  const [count, setCount] = useState(0);
  const [c, setC] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };


  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addCount = useCallback(() => {
    setC((a) => a + 1);
  }, [c]);

  return (
    <>
    <div className="app">
      <Timer/>
      <div className="align">
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <h2>This is a child counter below. It Will display the count whenever below button is clicked...you can see clearly in the console log  </h2>
      
      < ChildCounter count={c} addCount={addCount} />
    
      <h2>Here we are using useMemo function, the below will render only when there is a change in parent count</h2>
       <div className="align">Expensive Calculator: {calculation}</div>

      <ImperativeParentExample/>
      <Suspense fallback={<div style={{textAlign:"center"}}>Loading.....</div>}>
        <Lazy/>
      </Suspense>
      </div>
     
    </>
  );
};

export default App;
