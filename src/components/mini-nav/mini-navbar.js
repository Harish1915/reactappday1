import { Link ,NavLink} from "react-router-dom"
import "./mini-nav.css"

const MiniNvaBar=()=>{
    const linkMini={
        margin:10,textDecoration:"none"}
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
      
        <NavLink to="/" style={linkMini}>Home</NavLink>
      </li>
      <li className="nav-item">
       
      <NavLink to="/about" style={linkMini}>About</NavLink>

      </li>
      <li className="nav-item">
        
      <NavLink to="/recipes" style={linkMini}> Recipes </NavLink>

      </li>
      <li className="nav-item">
        
        <NavLink to="/login" style={linkMini}> Login</NavLink>
  
        </li>
     
    </ul>
  </div>
</nav>

    )
};
export default MiniNvaBar;