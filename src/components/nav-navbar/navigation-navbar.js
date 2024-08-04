import { Link ,NavLink} from "react-router-dom";
import "./nav-bar.css";
import { useContext } from "react";
import { RecipeContext } from "../../navigation/navigation";

const NavigationNavBar = () => {
    const linkStyle={
        margin:10,textDecoration:"none"}
        const{favDish}=useContext(RecipeContext)
    
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/"}  style={linkStyle}>Main</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  to={"/about"} style={linkStyle}> About </NavLink>
          </li> 
          <li className="nav-item">
          <NavLink  to={"/blog"}  style={linkStyle}> Blogs</NavLink>

          </li>
          <li className="nav-item">
            <NavLink to={"/setting"}  style={linkStyle}> Settings</NavLink>

          </li>
          <li className="nav-item">
            <NavLink to={"/recipes"}  style={linkStyle}> Recipes</NavLink>

          </li>
          <li className="nav-item">
            <NavLink to={"/favoriteRecipes"}  style={linkStyle}> Favorite-rsp-{favDish.length}</NavLink>

          </li>
          <li className="nav-item">
            <NavLink to={"/doctors"}  style={linkStyle}> Doctors</NavLink>

          </li>
          
        </ul>
      </div>
    </nav>
  );
};
export default NavigationNavBar;
