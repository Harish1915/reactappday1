import RecipeNavBar from "../RecipeMaker/RecipeNavigationBar";
import Footer from "./footer";
import RecipeSearch from "./Recipesearch";

const MainScreen=()=>{
    return(
      <>
      <RecipeNavBar/>
        <h1 className="search-container">ITEM'S MENU</h1>
        <RecipeSearch/>
        <Footer/>

     
        </>
    )
};
export default MainScreen;