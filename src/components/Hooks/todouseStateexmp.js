import { useState } from "react";

const TodoExample = () => {
  const [todo, setTodo] = useState([
    {
      name: "hi",
      todo: ["a", "b", "c"],
      marks: 100,
    },
  ]);
  const todoHandler = () => {
    const newTodo={
        name: "hello",
        todo: ["d", "e", "f"],
        marks: 90,
    };
    const newTodoState=[...todo,newTodo]
    setTodo(newTodoState);
    // console.log(todo);
  };
  const deleteHandler=(index)=>
    {
const finalState=todo.filter((_,ind)=>ind!=index);
setTodo(finalState);
  };

  return (
    <>
      <h2>Todo Example</h2>
      <button onClick={todoHandler}> Add Todo </button>
      {todo.map((each,index) => {
        return (
          <div key={index}>
            <h1>{each.name}</h1>
            <h2>{each.todo}</h2>
<button onClick={()=>deleteHandler(index)}>Delete Todo</button>
          </div>
        );
      })}
    </>
  );
};
export default TodoExample;
