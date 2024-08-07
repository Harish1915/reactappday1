import { useContext } from "react";
import CustomFormInput from "../components/forminput";
import NavigationNavBar from "../components/nav-navbar/navigation-navbar";
import { DataContext } from "../App";
import withProfileData from "../components/Hoc/withprofile";

const  AboutScreen=(props)=>{
    console.log(props,"props.....?");
    // const {name}=props.data
    
    const{username}=useContext(DataContext);
    return(
        <>
        <NavigationNavBar/>

        <h1> Well Come TO my About Screen </h1>
        {
            Object.keys(props.data).length>0?(
            <h2>Good Morning {JSON.stringify(props.data.username)}</h2>):// here we can remove json.string fy also 
            (<h3>Good Morning user</h3>)
        }
        <CustomFormInput/>
        </>
    )
};
export default withProfileData(AboutScreen);