import { useRef, useState } from "react";

function UncontrolledFormAPi(){
    const emailRef=useRef();
    const passwordRef=useRef();
    const[error,setError]=useState(null);
    const submitHandler=(event)=>{
        event.preventDefault();
        const emailEntered=emailRef.current.value;
        const passwordEntered=passwordRef.current.value;
        console.log(emailEntered,passwordEntered);
    if(emailEntered.length <15 && passwordEntered.length<15){ // in this case we can take useState for error 
        setError();
        // allow to submit
        successSubmit(emailEntered,passwordEntered);
    }else{
        setError("please enter <15 char for email and  password")
        // throw error
    }

    };
    const successSubmit=async(username,password)=>{
        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username,
              password,
            }),
          })
            .then((res) => res.json())
            .then(console.log);
          //  try {
          //   const response = await fetch('https://dummyjson.com/auth/login', {
          //     method: "POST",
          //     headers: { "Content-Type": "application/json" },
          //     body: JSON.stringify({
          //       username,
          //       password,
          //     }),
          //   });
          //   const finalResponse = await response.json();
          //   console.log(finalResponse);
          // } catch (err) {}
        

    };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="text"
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
{error && <h1 style={{color:"orange"}}>{error}</h1>}
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
  );
};
export default UncontrolledFormAPi;
