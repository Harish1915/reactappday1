import { Link } from "react-router-dom";
import RecipeNavBar from "../RecipeMaker/RecipeNavigationBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Error.css"

const ErrorScreen=()=>{
    const linkStyle={
        margin:10,
        textDecoration:"none"
    };
    const Home=()=>toast.info("Well Come to Home Screen...!")
    return(
      <>
        <h1>404 Error IN Valied Screen</h1>
        <button onClick={Home}><Link to="/" style={linkStyle}>Back TO Home</Link></button>


        <div className="card" style={{ width: "18rem" }}>
  <img src="image-url" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Card Title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

 
        
        </>
    )
};
export default ErrorScreen;