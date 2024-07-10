
import CustomButton from "./components/button/button";
// import Heading1, { Heading2 } from "./components/headings/heading";
import MinHeading1 ,{ Heading2 as SecondHeading2 ,

} from "./components/headings/heading";

import ListParent from "./components/lists/listParent";

import UnorderedList from "./components/lists/unorderedList";


const App = ()=>{

  return( 

  <div>
    <CustomButton/> <br></br><br></br>
    <CustomButton/><br></br><br></br>
    <CustomButton/><br></br><br></br>
    <CustomButton/><br></br><br></br>
    <CustomButton/><br></br><br></br>
    <MinHeading1/>
    <SecondHeading2/>
    <ListParent/>
    <UnorderedList/>

  </div>

  );
};
export default App;