import { Link, useNavigate } from "react-router-dom";


const InvalidScreen=()=>{

    const navigate=useNavigate();

    const NavigateHome=()=>{
        
navigate("/");
        
    };


    const linkStyle={
        margin:10,textDecoration:"none"}
    return(
<>
<h1>InvalidScreen 404 Error</h1>
{/* <button ><Link to={"/"} style={linkStyle}>Back to Home</Link></button> */}
<button onClick={NavigateHome}>Go TO Home</button>
</>
    )
};
export default InvalidScreen;