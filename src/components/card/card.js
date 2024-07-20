import "./card.css"

import { div } from "../div/div";
import BasicExample from "../bootstrap/progressbar";
import NavBar from "../navbar/navbar";
import SpinnEr from "../bootstrap/spinner/spinner";
import { fakeData } from "../fakedata/fakedata";
import CookIng from "../data.js/data";



export const Card1=(prop)=>{

    const{bg,rt,text,source,name,ds,color,ps,ct}=prop


    const calculatePercentage=(input)=>{
        // const base=1000
        let percentage=(input)*100
        return percentage
    }
    return(
        <div className="card1"style={{backgroundColor:bg}} >
<center>
            <SpinnEr/>
            <h1>ProductRating</h1>

            <BasicExample scale={rt}/>

             <p  style={{color:color}} >{text} </p>
           
             <img src={source} alt={name} width={120} height={120} />

             <h2>{ds} </h2>

             <h1>Product Price</h1>

             <BasicExample scale={ps}/>


             <h3>Price{ps}</h3>

             <h4>{ct}</h4>

             <h5>Rating {rt}</h5> <br></br>

            
            <br></br>

           <button className="button2"> SeeMore</button>
          
    </center>

</div>

    )
};