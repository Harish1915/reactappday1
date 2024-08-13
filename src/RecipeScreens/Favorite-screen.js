import { useContext } from "react";
import RecipeNavBar from "../RecipeMaker/RecipeNavigationBar";
import { ItemsContext } from "../RecipeMaker/RecipeNav";
import { Link } from "react-router-dom";


const FavoriteScreen = () => {
  const { favoriteDish,removeFromFavorite} = useContext(ItemsContext);
  console.log(favoriteDish,"favdish....");

  const removeHandler=(eachFood)=>{
    removeFromFavorite(eachFood.id)
  };
//   const wow=()=>toast("wow so east=y");
  
  return (
    <div>
      <RecipeNavBar />
      <h1>Favorite Screen</h1>

      {favoriteDish.length > 0 ? (
        <>
          {favoriteDish.map((each,i) => {
            return (
              <div key={i}>
                <h1>{each.name}</h1>
                <img src={each.image} height={150} width={150} />
                <button onClick={()=>removeHandler(each)}>Remove Item</button>
              </div>
            );
          })}
        </>
      ) : (
        <>
        No Dishes
       <Link to="/"> <button>Back TO Home </button></Link>
        </>
      )}
    </div>
  );
};
export default FavoriteScreen;
