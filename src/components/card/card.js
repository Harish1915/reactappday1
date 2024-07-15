import "./card.css"
import { div } from "../div/div";
import BasicExample from "../bootstrap/progressbar";
import NavBar from "../navbar/navbar";
import SpinnEr from "../bootstrap/spinner/spinner";
import { fakeData } from "../fakedata/fakedata";



export const Card1=(prop)=>{

    const {text,ds,ps,ct,rt,source,name,color,bg}=prop

    const calculatePercentage=(input)=>{
        const base=1000
        let percentage=(input/base)*100
        return percentage
    }
    return(
        <div className="card1"style={{backgroundColor:bg}} >
<center>
            <SpinnEr/>
            <BasicExample scale={22.9}/>

             <p  style={{color:color}} >{text} </p>
           
             <img src={source} alt={name} width={120} height={120} />

             <h2>{ds} </h2>

             <h3>{ps}</h3>

             <h4>{ct}</h4>

             <h5> {rt}</h5> <br></br>

            
            <br></br>

           <button className="button2"> SeeMore</button>
          
    </center>

</div>

    )
};