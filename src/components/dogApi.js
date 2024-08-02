import axios from "axios";
import { useEffect, useState } from "react";

const DogFind = () => {
  const [dogFacts, setDogFacts] = useState([]);

  useEffect(() => {
    fetchDogData();
  }, []);

  const fetchDogData = async () => {
    // try {
      const  {data}  = await axios.get("https://dog-api.kinduff.com/api/facts?number=10");
      setDogFacts(data.facts); 
      // console.log(data.facts);
      
      // if(status===200){
      //   console.log(data);
      // }else{ 
      //   console.log("error");
        
      // }
    
    // } catch (error) {
    //   console.error("Error fetching dog facts:", error);
    // }
 
  };

  return (
    <div>
      <h1>Dog Finder</h1>
      <ul>
        {dogFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogFind;
