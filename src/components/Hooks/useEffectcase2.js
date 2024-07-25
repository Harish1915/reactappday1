import React, { useEffect, useState } from "react";
import { greetingFn } from "../../jsFunctions/refresh";
import axios from "axios";

const ShowFetchCase2 = () => {
  const [greeting, setGreeting] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(30);


  useEffect(() => {
    console.log("useEffect");
    greetingHandler();
    fetchRecipes();
  }, [count,age ]);
  useEffect(()=>{
    console.log("useeffect2..");
  },[age])

  const greetingHandler = () => {
    const greetingString = greetingFn();
    setGreeting(greetingString);
  };

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        console.log(data);
        setRecipes(data.recipes);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const countHandler=()=>{
    setCount(count+1);
  };

  const ageHandler=()=>{
    setAge(age+1);
  };

  return (
    <div>
      {/* <h1>Time TO {greeting}</h1> */}
      <button onClick={countHandler}>count{count}</button>
      <button onClick={ageHandler}>AGE{age}</button>

      <ul>
        {recipes.length > 0 ? (
          recipes.map((each, index) => <li key={index}>{each.name}</li>)
        ) : (
          <li> no recipes </li>
        )}
      </ul>
    </div>
  );
};
export default ShowFetchCase2;
