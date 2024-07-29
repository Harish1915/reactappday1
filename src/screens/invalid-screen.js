import { Link } from "react-router-dom";


const InvalidScreen=()=>{
    const linkStyle={
        margin:10,textDecoration:"none"}
    return(
<>
<h1>InvalidScreen 404 Error</h1>
<button ><Link to={"/"} style={linkStyle}>Back to Home</Link></button>
</>
    )
};
export default InvalidScreen;