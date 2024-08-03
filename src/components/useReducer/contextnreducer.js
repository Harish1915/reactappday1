import { useContext } from "react";
import { CounterContext } from "../../App";


const{state,dispatchFunction}=useContext(CounterContext);


function XCounter(){
    const incHandler=()=>{
       dispatchFunction({
        type:actionTypes.INCREMENT
       })
    }
    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={incHandler}>INCREMENT</button>
        </div>
    )
};
export default XCounter;