

// const CustomButton= (prop)=>{
//     return(
// <button style={{backgroundColor:prop.bgColor}}>{prop.text} </button>
//     );
// };

// const CustomButton= (prop)=>{

//     const{bgColor,width,text="Button"}=prop // here we can d-structuring and text ki by default ga  button ani istunnam so text leka pothe by default ga button tiskuntadi component
//     return(
// <button style={{backgroundColor:bgColor,width:width}}>{text} </button>
//     );
// };

const CustomButton= (prop)=>{

    const{text="Harish kumar",bgColor,width=100}=prop.properties
    return(
<button style={{backgroundColor:bgColor,width:width}}>{text} </button>
    );
};
export default CustomButton;