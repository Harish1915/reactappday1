
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

import React from "react";



const App=()=>{


  return(
    <>

<NavBar/>

<div className="flex" >

{
  
 fakeData.map((data)=>{
  return(
  //  <React.Fragment key={data.id}>
    <Card1  
     name={data.name}
     text={data.text}
     ps={data.ps}
     ds={data.ds}
     ct={data.ct}
    source={data.source}
    rt={data.rt}
    color={data.color}
    bg={data.bg}    /> 

    // <React.Fragment/>
  )

 })

}
     </div>


    </>
    



    
  )
};
export default App;

