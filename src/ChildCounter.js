import { memo } from "react";

const ChildCounter = ({ count, addCount }) => {
  console.log("child render");
  return (
    <>
      <div className="align">
      Child counter:{count}
      <button onClick={addCount}>Count</button>
      </div>
    </>
  );
};

export default memo(ChildCounter);