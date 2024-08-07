import React, { useState } from 'react'
import ChildComponent from './child';

function ToggleFunction() {

    const [darkTheme,setDarkThem]=useState(false);
    console.log("component re render...");
    
    const themHandler=()=>{
        setDarkThem(!darkTheme);
    }
  return (
    <div>
      <button onClick={themHandler}> change them</button>;
      <ChildComponent/>
      
    </div>
  )
}

export default ToggleFunction;
