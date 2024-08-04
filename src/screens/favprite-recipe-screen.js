import { useContext } from "react";
import NavigationNavBar from "../components/nav-navbar/navigation-navbar";
import { RecipeContext } from "../navigation/navigation";

function Favorite() {
  const { favDish, removeFromFavorite } = useContext(RecipeContext);
  const removeHandler = (eachFood) => {
    removeFromFavorite(eachFood.id);
  };
  return (
    <div>
      <NavigationNavBar />
      <h1>well come to favorite recipe screen</h1>
      {favDish.length > 0 ? (
        <>
          {favDish.map((each, i) => {
            return (
              <div key={i}>
                <div className="card" style={{ width: 400 }}>
                  <img
                    className="card-img-top"
                    src={each.image}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{each.name}</h4>
                    <p className="card-text">{each.ingredients}</p>
                    <button onClick={() => removeHandler(each)}>
                      Remove Food
                      
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h4>No Dishes Found</h4>
      )}
    </div>
  );
}
export default Favorite;
