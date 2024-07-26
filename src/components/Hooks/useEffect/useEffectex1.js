import { useEffect, useState } from "react";

const UseEffectEx1 = () => {
    const[XPosition,setXPosition]=useState(0);
    const[YPosition,setYPosition]=useState(0);

  useEffect(() => {
window.addEventListener("mousemove",mouseTrack);
    return () => {// here we are removing mousemove, mouseTrack clean using this removeEvent

        window.removeEventListener("mousemove",mouseTrack);
    };
  }, []);
  const mouseTrack = (event) => {
    setXPosition(event.clientX);
    setYPosition(event.clientY);
 
    console.log(event);
  };

  return (
    <>
      <h1>hi hello</h1>
      <h1> Current mouse Position in x-axis{XPosition}</h1>
      <h1> Current mouse Position in y-axis{YPosition}</h1>

    </>
  );
};
export default UseEffectEx1;
