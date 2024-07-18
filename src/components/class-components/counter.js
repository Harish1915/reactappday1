import { Component, createContext } from "react";
import  "./counter.css"

class Counter extends Component {
  state = {
    count: 10,
  };

  incCr = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

 
  decCr = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };
reSet =()=>{

    this.setState({
        count:10,
    })
}
    
  render() {
    return (
        <>
        <marquee >  Click to Check INC and DEC In Card</marquee>
      <div className="card">
        <h1>- Count  + </h1>

        <h1 className="card h1 ">{this.state.count}</h1>
        <button onClick={this.incCr} className=".card button"> + Increment</button>
        <button onClick={this.decCr} className=".card button"> - Decrement</button>
        <button onClick={this.reSet} className=".card button"> @  Reset</button>
      </div>
      </>
    );
  }
}
export default Counter;
