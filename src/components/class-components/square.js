import { Component } from "react";
import "./square.css";

class SquareBox extends Component {
  state = {
    square: ["odd", "even", "odd", "even"],
  };

  addSquare = () => {
    // const { square } = this.state;
    const newSquare = this.state.square.length % 2 === 0 ? "odd" : "even";
    this.setState({
      square: [...this.state.square, newSquare],
    });
  };

  render() {
    return (
      <>
        <h1>Click To Add a Box</h1>
        <button onClick={this.addSquare}>Click Me</button>
        {this.state.square.map((each, index) => (
          <div 
          key={index} className={(index + 1) % 2 === 0 ? "box1" : "box2"}>

            {each}
          </div>
        ))}
      </>
    );
  }
}

export default SquareBox;
