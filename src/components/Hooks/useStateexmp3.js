import { useEffect, useState } from "react";
import { greetingFn } from "../../jsFunctions/refresh";

const ShowGreeting = () => {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    console.log("useeffect");
    // document.title = "hi";
    greetingHandler();
  }, []);
  const greetingHandler = () => {
    const greetingString = greetingFn();

    setGreeting(greetingString);
  };
  
  return (
    <>
      <h1>Time TO {greeting}</h1>
      {/* <button onClick={greetingHandler}>click me</button> */}
    </>
  );
};
export default ShowGreeting;
