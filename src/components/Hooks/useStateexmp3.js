import { useState } from "react"
import { greetingFn } from "../../jsFunctions/refresh";


const ShowGreeting=()=>{
    const[greeting,setGreeting]=useState("");
   const greetingHandler=()=>{
        const greetingString=greetingFn();
        console.log(greetingString);
        setGreeting(greetingString)
    };
    return(
        <>
        <h1>Time TO  {greeting}</h1>
        <button onClick={greetingHandler}>click me</button>
        </>
    )
};
export default ShowGreeting;