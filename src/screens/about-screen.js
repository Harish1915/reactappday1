import { useContext } from "react";
import CustomFormInput from "../components/forminput";
import NavigationNavBar from "../components/nav-navbar/navigation-navbar";
import { DataContext } from "../App";

const  AboutScreen=()=>{
    const{username}=useContext(DataContext);
    return(
        <>
        <NavigationNavBar/>
        <h1> Well Come TO my About Screen {username}</h1>
        <CustomFormInput/>
        </>
    )
};
export default AboutScreen;