import { useState } from "react";

const UseStateExample2 = () => {
  const [count, inCrement] = useState(10);
  const countHandler = () => {
    // inCrement((count=>count+1));
    // inCrement((count=>count+1));
    setInterval(() => { // every second count will increase
      inCrement((count)=>count + 1);
      inCrement((count)=>count + 1);

    }, 1000);
  };

  return (
    <>
      {count ? <h1>well come</h1> : <h2>login</h2>}
      <button onClick={countHandler}>{count}</button>
    </>
  );
};
export default UseStateExample2;
