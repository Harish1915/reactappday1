import RegistrationForm from "../components/Forms/uncontrolled/controlled/Registration-form";
import withProfileData from "../components/Hoc/withprofile";
import NavigationNavBar from "../components/nav-navbar/navigation-navbar";
import ToggleFunction from "../components/ReactMemo/parent";
import UseReducer from "../components/useReducer/useReducer";

const  BlogScreen=(props)=>{
    return(
        <>
        <NavigationNavBar/>
        <ToggleFunction/>
      
        <h1> Well Come Blog Screen</h1>
        <h3>Good Morning {props.data.username}</h3>
        <UseReducer/>
        
       
        </>
    )
};
export default withProfileData(BlogScreen);