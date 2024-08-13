import RecipeFind from "../components/Apicall's/recipesApi";
import RecipeNavBar from "../RecipeMaker/RecipeNavigationBar";

const SearchScreen=()=>{
    return(
      <>
      <RecipeNavBar/>
        
        <RecipeFind/>
        </>
    )
};
export default SearchScreen;