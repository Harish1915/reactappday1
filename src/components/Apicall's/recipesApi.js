import axios from "axios";
import { useEffect, useState } from "react";

const RecipeFind = () => {
  const [recipes, setRecipes] = useState([]);
  const[selectedRecipe,setSelectedRecipe]=useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get("https://dummyjson.com/recipes");
    // setRecipes(data.recipes);
    const idNdata = data.recipes.map((eachRecipe) => {
      return { id: eachRecipe.id, recipeName: eachRecipe.name };
    });
    // console.log(idNdata);
    setRecipes(idNdata);
    console.log(data);
  };

  const selectHandler = (event) => {
    const selectedRecipeId=event.target.value;
fetchEachRecipe(selectedRecipeId)
    // console.log(event.target.value);
  };
// here one more Api call
const fetchEachRecipe=async(recipeId)=>{
    const {data}=await axios.get(`https://dummyjson.com/recipes/${recipeId}`)
setSelectedRecipe(data);
    console.log(data);
};

  return (
    <div>
      <h1>Select the Recipes</h1>
      {/* usestate=recips has a empty ([])array we need to fill with data */}

      {recipes.length > 0 && (
        <select onChange={selectHandler}>
              {/*iterate the options */}
          {recipes.map((each) => (
            <option value={each.id} key={each.id}>{each.recipeName}</option>
            
          ))}
        </select>
      )}

{
    Object.keys(selectedRecipe).length>0 && 
    <div>
<h1>{selectedRecipe.name}</h1>
<img src={selectedRecipe.image} width={150} height={150}/>
{/* <h1>{selectedRecipe.ingredients}</h1> */}

    </div>
}
     
    

     
    </div>
  );
};
export default RecipeFind;


