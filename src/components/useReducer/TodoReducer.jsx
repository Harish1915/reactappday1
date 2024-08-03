import { useReducer } from "react";
import "./todostyle.css"
const initialState = {count: 0};

const actionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET:
      return { ...state, count: initialState.count };
    default:
      return state;
  }
};

function TodoReducer(){
const[currentState,dispatchFunction]=useReducer(reducer,initialState);
const incrementHandler=()=>{
  dispatchFunction({
    type:actionTypes.INCREMENT,
    
  });
}
const decrementHandler=()=>{
  dispatchFunction({
    type:actionTypes.DECREMENT,
    
  });
}
const resetHandler=()=>{
  dispatchFunction({
    type:actionTypes.RESET,
    
  });
}
    return(
        <div className="inc-card">
          <h1 className="text">Number Count  {currentState.count}</h1>
          <button onClick={incrementHandler} className="btn1">Increment +</button>
        
          <button onClick={decrementHandler} className="btn2">DECREMENT -</button>
          
          <button onClick={resetHandler} className="btn3 ">RESET</button>
          </div>
    )
};
export default TodoReducer;