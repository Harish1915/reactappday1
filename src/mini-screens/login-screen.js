import { Button } from "react-bootstrap";
import MiniNvaBar from "../components/mini-nav/mini-navbar";
import { Link } from "react-router-dom";
import ControlledForm1 from "../components/Forms/uncontrolled/controlled/tableform";

const LoginScreen=()=>{
    return(
        <>
        <MiniNvaBar/>
        
        <ControlledForm1/><br></br>

        <button><Link to="/" >GO to Home</Link></button>
        
        </>
    )
}
export default LoginScreen;