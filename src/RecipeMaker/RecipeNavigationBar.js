import { NavLink } from "react-router-dom";
import "./rnavbar.css";
import { useContext } from "react";
import { ItemsContext } from "./RecipeNav";

const RecipeNavBar = () => {
  const { favoriteDish } = useContext(ItemsContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          HRK App
        </NavLink>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/recipe" className="nav-link">
                Recipe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/search" className="nav-link">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/findRecipes" className="nav-link">
                Find
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorite" className="nav-link">
                Favorite <span className="badge bg-secondary">{favoriteDish.length}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/location" className="nav-link">
                Location
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/error" className="nav-link">
                Error
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default RecipeNavBar;
