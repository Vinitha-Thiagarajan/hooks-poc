
   
import React from "react";

export default () => {
  return <div>
      <h2>What is React.lazy()</h2>
  <h3>It is a new function in react that lets you load react components lazily through code splitting without help from any additional libraries. Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly unrolling the non-critical items later. It is now fully integrated into core react library itself. We formerly used react-loadable to achieve this but now we have react.lazy() in react core.</h3>
  <h2>Suspense</h2>
 <h3> Suspense is a component required by the lazy function basically used to wrap lazy components. Multiple lazy components can be wrapped with the suspense component. It takes a fallback property that accepts the react elements you want to render as the lazy component is being loaded.!</h3>
 <h3> "you can identify it by making slow 3g network in inspect mode"</h3>
 </div>;
 
};