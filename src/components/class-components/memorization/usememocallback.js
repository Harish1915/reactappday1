import { useCallback, useMemo, useState } from "react";
import CustomButton from "../../button/button";
import useCounter from "../../../Customhooks/usecounter";
import { isEven } from "../../../Customhooks/isEven";

const UseMemo = () => {
//   const [age, setAge] = useState(10);
  const[age,incrementAge]=useCounter(10)
//   const [Weight, setWeight] = useState(50);
const [Weight,incrementWeight]=useCounter(50,2); // here 2 is scale value

//   const ageHandler = 
//   useCallback(() => {
//     setAge(age + 1);
//   },[age]);
  
//   const WeightHandler = 
//   useCallback(() => {
//     setWeight(Weight + 2);
//   },[Weight]);


//   const isEven = useMemo(() => {
//     console.log("is even....");
    
//     return age % 2 === 0 ? true : false;
//   }, [age]);

  return (
    <>
      <h1>
        Current Age {age} {isEven(age) ? "even" : "odd"}{" "}
      </h1>
      <h1>Current Weight {Weight} </h1>
      <CustomButton text="Age-Inc" onPress={incrementAge}/>
      <CustomButton text="weight0Inc" onPress={incrementWeight}/>

      {/* <button onClick={ageHandler}>AGe-Inc</button>
      <button onClick={WeightHandler}>Weight-Inc</button> */}
    </>
  );
};
export default UseMemo;
