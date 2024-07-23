import { Component } from "react";
import Child from "./child";

export default class Parent extends Component {
  state = {
    toggleComponent: false,
  };
  toggleHandler = () => {
    this.setState({
      toggleComponent: !this.state.toggleComponent,
    });
  };
  componentDidMount(){
    console.log("componentDidMount Parent");// 3rd execute
  }
//   componentDidUpdate(){
//     console.log("componentDidMount Parent");//(in this first parent render n next child  n next parent cmp did updated child not executed)
//   }
  render() {
    console.log("parent rendering....");//1st this execute // 2nd child executed
    return (
      <div> 
        <Child /> 
        <button onClick={this.toggleHandler}>Toggle component</button>
      </div>
    );
  }
};
