import axios from "axios";
import { useEffect, useState } from "react";

const CountData = () => {
  const [count, setCount] = useState(0);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("useEffect Execute.....");
    fetchRecipes();
  }, [count]);
  const countHandler = () => {
    // setCount((count) => count + 1);
    setCount( count + 1);

  };

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setRecipes(data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <button onClick={countHandler}>click{count}</button>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((each) => {
            <li>{each.name}</li>;
          })
        ) : (
          <h1>no recipes</h1>
        )}
      </ul>
    </div>
  );
};
export default CountData;
