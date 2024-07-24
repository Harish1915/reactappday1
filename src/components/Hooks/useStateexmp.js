import { useState } from "react";

const UseStateExample = () => {
  const [login, setLogin] = useState(false);//current state login =false here
  const loginHandler = () => {
    // setLogin((login) => !login);  
    setLogin(!login)
  };
  
  return (
    <>
      <h1>use state</h1>

      {login ? <h1>Well come</h1> : <h2>please login</h2>}

      <button onClick={loginHandler}>click me</button>
    </>
  );
};
export default UseStateExample;
