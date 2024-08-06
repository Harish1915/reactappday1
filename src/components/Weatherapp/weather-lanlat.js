import "./weather.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const WeatherAPP = () => {
  const[weatherData,setWeatherData]=useState(false);
  // const[ACity,setACity]=useState()
  const inputSearch=useRef();
  useEffect(() => {
    fetchData("London");
  },[]);

  const fetchData = async (city) => {
    if(city === ""){
      alert("Enter City Name")
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b076dbf52fb2ed953b599cfed54ed6b6`;
      
      const response = await axios.get(url);
      // const data=await response.json();
     
      console.log(response.data);
      setWeatherData(response.data);
        // humidity:response.data.main.humidity,
        // windSpeed:response.data.wind.speed,
        // // math.floor is convert  decimal to integer values
        // // temperature:Math.floor(response.data.temp),
        // location:response.data.name,
        // icon:response.data.weather[0].icon
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'Clear':
        return clear_icon;
      case 'Clouds':
        return cloud_icon;
      case 'Drizzle':
        return drizzle_icon;
      case 'Rain':
        return rain_icon;
      case 'Snow':
        return snow_icon;
      default:
        return clear_icon;
    }
  };

  const getLocalTime = (timezoneOffset) => {
    const localDate = new Date(new Date().getTime() );
    return localDate.toLocaleTimeString();
  };
   return (



    <div className="weather">
        <div className="column">
              <div>
                <p>TIME: {getLocalTime(weatherData.timezone)}</p>
                
              </div>
            </div>
      <div className="search-bar">
        
       <input type="text" placeholder="search"  ref={inputSearch}/>
        <img src={search_icon} alt="search icon"  onClick={()=>fetchData(inputSearch.current.value)}/>
      </div>
      {weatherData && <>
      <img src={ getWeatherIcon(weatherData.weather[0].main)} alt="clear weather icon" className="weather-icon" />
      <p className="temp">{Math.round(weatherData.main.temp)}°c</p>
      <p className="location">{weatherData.name}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity icon" />
          <div>
            <p>{weatherData.main.humidity}%</p>
            <span> Humidity </span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="wind icon" />
          <div>
            <p>{weatherData.wind.speed} km/h</p>
            <span> Wind Speed </span>
          </div>
        </div>

      
      </div>
      </>}
    </div>

   
  
    
  );
};

export default WeatherAPP;
