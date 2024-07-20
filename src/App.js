
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

const students=["Prem","Samson","SPM"];
const vegetables=["1kaya","Bkaya","Skaya"];

const Item=["CHICKEN-BIRYANI"];
const Ingredients=["Rice","oil","Pan","Bowl","Spoon"];
const Instructions=["Switch on the Stove","Take A Cooker"]


const App=()=>{
  return(
  <div>

{/* <FetchExample/> */}
<FetchExample1/>

    </div>

  )
};
export default App;  











{/* <Heading1 title={Item}/>
<Heading1 title={"ingredients to cook the " + Item}/>
<CustomList list={Ingredients}/>
<Heading1 title={"Required  Steps to Cook The  " + Item}/>
<CustomList list={Instructions}/>
<Heading1 title={"Fruits"}/>

   <CustomList list={["apple","banana"]} />

<Heading1 title={"Students"}/>

    <CustomList list={students}/>

<Heading1 title={"Vegetables"}/>

      <CustomList list={vegetables}/> */}




