import { Component } from "react";

export default class UnMounting extends Component {
  constructor() {
    super();
    this.state = {
      isChildVisible: true,
    };
  }
  childHandler = () => {
    this.setState({
      isChildVisible: !this.state.isChildVisible,
    });
  };
  render() {
    return (
      <div>
        {this.state.isChildVisible ? <Child /> : <h1>No Child</h1>}
        <button onClick={this.childHandler}> Click me </button>
      </div>
    );
  }
}

 class Child extends Component {
    componentWillUnmount(){
        // this method is used to clean up the memory leaks of the component while removing
        alert("im removed")
    }
  render() {
    return <div> UnMounting </div>;
  }
}
