import { Component } from "react";
import CustomList from "../lists/customlist/customlist";

class TodoComponent extends Component {
  state = {
    todo: ["watch React class end of the dau", "complete the react class"], // it's array we can use map method
    // todo2:"complete the task"
  };
  addTodoHandle = () => {
    const newState = [...this.state.todo, "push to git-Hub"];
    this.setState({
      todo: newState,
    });
  };

  render() {
    return (
      <>
        <h1>HI THIS IS HARISH </h1>
        <CustomList list={this.state.todo} />

        <button onClick={this.addTodoHandle}>click to add todo</button>

        {/* <ol>
{
    this.state.todo.map((each)=>{
        return(

            <li>{each}</li>
        )
        

    })
}
</ol> */}
      </>
    );
  }
}
export default TodoComponent;
