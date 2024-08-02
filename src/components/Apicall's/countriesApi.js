import axios from "axios";
import { useEffect, useState } from "react";

const CountryFind = () => {
  const [country, setCountry] = useState([]);
  const[selectedCountry,setSelectedCountry]=useState(null);

  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      const cNames = data.map((eachCountry) => {
        return { name: eachCountry.name.official };
      });
      setCountry(cNames);
      console.log(cNames);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };
  const countryHandler=(event)=>{
    const countryName=event.target.value;
    fetchEachCountry(countryName)

  };
  const fetchEachCountry=async(name)=>{
    const{data}=await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    
    setSelectedCountry(data[0])
    console.log(data[0]);
  };

  return (
    <div>
      <h1>IM INDIAN</h1>
      {
        country.length>0 && (

            <select onChange={countryHandler}>
            {country.map((each, index) => (
              <option value={each.name} key={index}>{each.name}</option>
            ))}
          </select>
        )
      }
       
      {
        selectedCountry && 
        <div> 
            <h1>{selectedCountry.name.common}</h1>
            <h1>{selectedCountry.name.official}</h1>
        </div>
      }
    </div>
  );
};

export default CountryFind;
