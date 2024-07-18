import { Component } from "react";
import "./squareclrchange.css";

class SquareBox1 extends Component {
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

  chNg = (index) => {
    this.setState(coLor => {
      const newSquare = coLor.square.map((sq, i) => {
        if (i === index) {
          return sq === "odd" ? "even" : "odd";
        }
        return sq;
      });
      return { square: newSquare };
    });
  }

  render() {
    return (
      <>
        <h1>Click To Change Box Color And Shape Add Extra Box</h1>
        <button onClick={this.addSquare}>Click Me</button>
        {this.state.square.map((each, index) => (
          <div
            key={index}
            className={each === "odd" ? "box1" : "box2"}
            onClick={() => this.chNg(index)}
          >
            {each}
          </div>
        ))}
      </>
    );
  }
}



export default SquareBox1;