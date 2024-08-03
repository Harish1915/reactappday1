
import CustomButton, { CustomButtonA } from "./components/button/button";
// import Heading1, { Heading2 } from "./components/headings/heading";
import MinHeading1 ,{ Heading2 as SecondHeading2 ,

} from "./components/headings/heading";

import ListParent from "./components/lists/listParent";

import UnorderedList from "./components/lists/unorderedList";

import ProfileComponents from "./components/profile/profileComponent";

import ImageComp from "./components/image/imagecmp";

import Table from "./components/table/table";
import ListItems from "./components/lists/listitems";
import Heading1 from "./components/headings/heading";


import { bagData } from "./components/lists/fruits";

import { Heading2 } from "./components/headings/heading";
import Greeting from "./components/greeting/greeting";
import Card, { Card1 } from "./components/card/card";
import { div } from "./components/div/div";
import { fakeData } from "./components/fakedata/fakedata";
import NavBar from "./components/navbar/navbar";
import BasicExample from "./components/bootstrap/progressbar";

// import React from "react";
import CustomList from "./components/lists/customlist/customlist";
import ToggleComponent from "./components/card/card";
import ConditionalRendering from "./components/conditionalrender/condition";
import ClassButton from "./components/class-components/clsbutton";
import SubscribeComponent from "./components/class-components/subscribe-button";
import TodoComponent from "./components/class-components/todo";
import SquareBox from "./components/class-components/square";
import Box from "./components/class-components/squareclrchange";
import Counter from "./components/class-components/counter";
import SquareBox1 from "./components/class-components/squareclrchange";
import IplTeams from "./components/class-components/iplteams";
import FetchExample from "./components/class-components/fetechExample";
import FetchExample1 from "./components/class-components/productscalebar";
import FetchExample2 from "./components/class-components/fetchaync";
import RecipeList from "./components/class-components/axiosrecips";
import MountingComponent from "./components/class-components/mounting/mounting";
import UpdatingComponent from "./components/class-components/updating/updating";
import UnMounting from "./components/class-components/unmounting/unmounting";
import UserList from "./components/jsonapi";
import UserList1 from "./components/jsonapi";
import UseStateExample from "./components/Hooks/useStateexmp";
import UseStateExample2 from "./components/Hooks/useStateexmp2";
import TodoExample from "./components/Hooks/todouseStateexmp";
import ShowGreeting from "./components/Hooks/useStateexmp3";
import ShowFetch from "./components/Hooks/useEffect-Fetch";
import ShowFetchCase2 from "./components/Hooks/useEffectcase2";
import CountData from "./components/pratic";
import UseEffectEx1 from "./components/Hooks/useEffect/useEffectex1";
import UncontrolledForm from "./components/Forms/uncontrolled/uncontrolform";
import UncontrolledFormAPi from "./components/Forms/uncontrolled/uncontrollfrmApi";
import AppleForm from "./components/Forms/uncontrolled/samsong";
import ControlledForm from "./components/Forms/uncontrolled/controlled/controll-form";
import ControlledForm1 from "./components/Forms/uncontrolled/controlled/tableform";
import RegistrationForm from "./components/Forms/uncontrolled/controlled/Registration-form";
import NavigationStack from "./navigation/navigation";
import { createContext, useReducer, useState } from "react";
import RecipeFind from "./components/Apicall's/recipesApi";
import CountryFinder from "./components/Apicall's/countriesApi";
import CountryFind from "./components/Apicall's/countriesApi";
import DogFind from "./components/dogApi";
import UseReducer from "./components/useReducer/useReducer";
import TodoReducer from "./components/useReducer/TodoReducer";
import xCounter from "./components/useReducer/sample";
import XCounter from "./components/useReducer/contextnreducer";




export const DataContext=createContext();
export const CounterContext=createContext();

const App=()=>{

//   const [username,setUserName]=useState("Prem");
//   const [darkMode,setDarkMode]=useState(true);
//   const[color,setColorMode]=useState(true);
//   const[counter,setCounter]=useState(10)

//   const changeUsername=(newName)=>{
//     setUserName(newName)
//   }
//   const darkLightMode=()=>{
//     setDarkMode((setMode)=>!setMode)
//   }
//   const colorC=()=>{
// setColorMode((color)=>!color)
//   }
// const changeCount=(value)=>{
//   setCounter(counter+value);
// }


const initialState = {count: 0};

const actionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET:
      return { ...state, count: initialState.count };
    default:
      return state;
  }
};

const [state,dispatchFunction]=useReducer(reducer,initialState);

  return(


<div>
<CounterContext.Provider value={{
  state,
  dispatchFunction
}}>
<XCounter/>
</CounterContext.Provider>
</div>









    // <CountryFind/>
    // <DogFind/>
//   <div>
//   <DataContext.Provider value={{
//     username,// key n value same so we can take single username
//     darkMode,
//     changeUsername,//function passing in obj it will change as a method 
//     darkLightMode,
//     color,
//     colorC,
//     counter,
//     changeCount,

//   }}>
// <NavigationStack/>
//   </DataContext.Provider>


//     </div>
// {/* <RecipeFind/> */}

// {/* <TodoReducer/> */}


  )
};
export default App;  














