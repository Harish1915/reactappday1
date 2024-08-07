import RegistrationForm from "../components/Forms/uncontrolled/controlled/Registration-form";
import withCounter from "../components/Hoc/CounterHoc";
import withProfileData from "../components/Hoc/withprofile";
import NavigationNavBar from "../components/nav-navbar/navigation-navbar";
import ToggleFunction from "../components/ReactMemo/parent";
import UseReducer from "../components/useReducer/useReducer";

const  BlogScreen=({count,increment,decrement,reset})=>{
    return(
        <>
        <NavigationNavBar/>


           <div>
            <h1>Counter:{count}</h1>
            <button onClick={increment}> Increment+</button>
            <button onClick={decrement}> Decrement-</button>
            <button onClick={reset}> reset</button>

        </div>
        <ToggleFunction/>
      
        {/* <h1> Well Come Blog Screen</h1>
        <h3>Good Morning {props.data.username}</h3> */}

        <UseReducer/>

     
        
       
        </>
    )
};
export default withCounter(BlogScreen);