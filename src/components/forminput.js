import { useState } from "react";

function CustomFormInput() {

    const[selected,setSelected]=useState();
  const recipes = [
    {
      name: "Fried Rice",
      id:1,
    },
    {
      name: "Pizza",
      id:2,
    },
  ];
  const changeHandler=(event)=>{
    setSelected(event.target.value);

  };
  const SubmitHandler=(event)=>{
    event.preventDefault();
    console.log(selected,"dish");
  };
  return <div> 
    <form onSubmit={SubmitHandler}>
    <select onChange={changeHandler}>
        {
            recipes.map((eachRecipe,id)=>{
                
                return <option value={eachRecipe.name} key={id}>{eachRecipe.name}</option>
                    
                
            })
        }
       
    </select>
    <button>Submit</button>
    </form>
  </div>;
}
export default CustomFormInput;
