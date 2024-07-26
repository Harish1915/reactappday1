import { useRef, useState } from "react";

const UncontrolledForm=()=>{
    const[error,setError]=useState(null);
    const emailRef=useRef();
    const passwordRef=useRef();
    const submitHandler=(e)=>{
        e.preventDefault();
        const emailEnter=emailRef.current.value;
        const passwordEnter=passwordRef.current.value;
        console.log(emailEnter,passwordEnter,"user entered details...");

if(emailEnter.length <25 && passwordEnter.length<10){
    setError(null);
    // allow user to submit
successSubmit(emailEnter,passwordEnter);
}else{
    //throw the error
    setError("please enter <25 character for email and <10 for password")
}
    };
   const successSubmit=()=>{
    alert("Form Validation Success ")
        // hit the server
    }; 

    return(
        <form onSubmit={submitHandler}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={emailRef}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={passwordRef}
    />
  </div>
  {error && <span style={{color:"red"}}>{error}</span>}
  <div className="form-check mb-3">
    {/* <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label> */}
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    )

};
export default UncontrolledForm;