import { useState } from "react"




const  useCounter=(initialState=10 , Scale=1)=>{

    const [value,setValue]=useState(initialState);


    const valueIncHandler=()=>{
        setValue(value+Scale);
    };
    const valueDecHandler=()=>{
        setValue(value-Scale);
    };
    const valueResetHandler=()=>{
        setValue(0);
    };
    return[value,valueIncHandler,valueDecHandler,valueResetHandler]
};
export default useCounter;