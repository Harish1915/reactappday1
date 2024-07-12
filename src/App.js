
import CustomButton from "./components/button/button";
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





  
    {/* <CustomButton/> <br></br><br></br>
    <CustomButton/><br></br><br></br>
    <CustomButton/><br></br><br></br>
    <CustomButton/><br></br><br></br>
    <CustomButton/><br></br><br></br>
    <MinHeading1/>
    <SecondHeading2/>
    <ListParent/>
    <UnorderedList/> */}

    {/* <ProfileComponents/> 
    <Table/> 

    <ListItems/> */}
    {/* <ListParent/> */}

    {/* <CustomButton text="login" bgColor="red" width={100}/><br></br><br></br>

    <CustomButton text="submit" bgColor="blue"  width={80}/><br></br><br></br>

    <CustomButton text="login" bgColor="green"  width={70}/><br></br><br></br>

    <CustomButton  bgColor="pink"  width={70}/><br></br><br></br> */}

{/* <CustomButton properties ={{text:"login" ,bgColor:"red"}}/><br></br><br></br>

<CustomButton properties ={{text:"submit",bgColor:"blue" }}/><br></br><br></br>

<CustomButton properties ={{text:"login", bgColor:"green" }}/><br></br><br></br>

<CustomButton properties ={{bgColor:"pink"}}/><br></br><br></br> */}

    
const App = ()=>{

return( 

  <div>

    {bagData.map((a)=>{

        return(
          <div key={a.name}>

<Heading1 text={a.name}  

    />

<ImageComp

source={a.source}
    
    altText="bag"

    width={100}
 
    height={100}

    />
    

    <Heading2 description={a.description}/>

    <hr/>

    </div>

        );
      })
    }



  </div>

  );
};
export default App;