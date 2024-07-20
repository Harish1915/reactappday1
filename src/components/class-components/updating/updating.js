import { Component } from "react";

export default class UpdatingComponent extends Component {
  constructor() {
    super();
    this.state = {
      // initial stage
      cakeCount: 100,
    };
  }
  buyCakeHandler = () => {
    this.setState({
      cakeCount: this.state.cakeCount - 1,
    });
  };

  shouldComponentUpdate(){ // it will return only boolean values
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){ //to get a previous value of the component will use this 
    console.log(prevState);
    return null;
  }

//   componentDidMount(){ // using dom n change the Tab title
// document.title=`Cake Count ${this.state.cakeCount}`

//   }
  componentDidUpdate(){ // using dom n change the Tab title and count also
    document.title=`Cake Count ${this.state.cakeCount}`
    
      }
  render() {
    return (
      <div>
        <h1>Well Come TO my Bakery</h1>
        <h1>NUMBER OF CAKES IN MY Bakery {this.state.cakeCount}</h1>
        <button onClick={this.buyCakeHandler}> Buy Cake</button>
      </div>
    );
  }
}
