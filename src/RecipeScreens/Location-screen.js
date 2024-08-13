import RecipeNavBar from "../RecipeMaker/RecipeNavigationBar";
import Footer from "./footer";


const LocationScreen=()=>{
    return(
      <>
      <RecipeNavBar/>
        <h1 className="search-container">RESTAURANT LOCATION MAP</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15221.368854891276!2d78.39859894070344!3d17.49117009263895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91625d9cd1ad%3A0x4455387ad24a675d!2s10000coders!5e0!3m2!1sen!2sin!4v1723483105686!5m2!1sen!2sin" width={1420} height={700} style={{border:0, margin:20}} allowfullscreen="" loading={"lazy"} referrerpolicy="no-referrer-when-downgrade"></iframe>
<Footer/>
     
        </>
    )
};
export default LocationScreen;