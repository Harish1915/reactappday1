import Heading1 from "../headings/heading";
import { Heading2 } from "../headings/heading";
import ImageComp from "../image/imagecmp";

const ProfileComponents = () => {

    const profileDetails={
        name:"Hari",
        age:25,
        city:"Kmr"
    };

    const{name, age,city}=profileDetails;

    return (
    
    <div>
        <h1> Hi my name is {name}</h1>

        <h1>im still {age} old</h1>
       
        <h1>im from {city}</h1>
       
       

        
    </div>

    );
    
};

export default ProfileComponents;