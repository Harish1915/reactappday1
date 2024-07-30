import { useState } from "react";
import ConditionalRendering from "../../../conditionalrender/condition";
import ImageComp from "../../../image/imagecmp";
import SpinnEr from "../../../bootstrap/spinner/spinner";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const [username, setUserName] = useState("");
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userData, setUserData] = useState({});
  const[list,setList]=useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!usernameError && !emailError && !passwordError) {
      // console.log("success");
      successSubmit(username, email, password);
    }
  };

  const successSubmit = async (username, email, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const finalResponse = await response.json();
      // console.log(finalResponse,"finalResponse");
      if (finalResponse.message) {
        alert(finalResponse.message);
      } else {
        console.log(finalResponse, "finalResponse");
        const totalData={firstName:finalResponse.firstName,lastName:finalResponse.lastName,email:finalResponse.email};
setUserName("");
setEMail("");
setPassword("");
        // console.log(list);
        // const userExists=list.includes(totalData); // find or filter tiskoni cheyali ekkada
        // if(userExists){
        //   alert("user already exists");
        // }else{
        //   setList([...list,totalData]);
        // }
        const userExists = list.find(item => item === totalData.email);

if (userExists) {
  alert("User already exists");
} else {
  setList([...list, totalData.email]);
}
       
        // setUserData(finalResponse);// after submit showing data
      }
    } catch (error) {}
  };

  const usernameHandler = (event) => {
    const usernameValue = event.target.value;
    //   console.log(usernameValue,"");
    setUserName(usernameValue);
    if (DataValidate(usernameValue)) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
  };
  const emailHandler = (event) => {
    const emailValue = event.target.value;
    setEMail(emailValue);
    if (EmailValidate(emailValue)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const passwordHandler = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    if (DataValidate(passwordValue)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  // as well as we need to take separate validation for every Handler
  const DataValidate = (value) => {
    //username n password
    return value.length > 15;
  };
  const EmailValidate = (value) => {
    // email
    return value.length > 30;
  };

  const deleteHandler=(index)=>{
    setList(list.filter((_,i)=>i!==index));
  };

  return (
    <>
      {Object.keys(userData).length > 0 ? (
        <h1> Hi {userData.firstName}  {userData.lastName} <br/> <SpinnEr/>Your  Email ID:- <SpinnEr/>{userData.email} 
        
        
            </h1>
       
      ) : (
        <form onSubmit={submitHandler} style={{ maxWidth: 450 }}>
          <h1>"User-Registration-Form"</h1>
          <div className="mb-3 mt-3">
            <label htmlFor="UserName" className="form-label">
              UserName:
            </label>
            <input
              type="text"
              className="form-control"
              id="UserName"
              placeholder="UserName"
              name="User Name"
              value={username}
              onChange={usernameHandler}
            />
            {usernameError && (
              <span style={{ color: "Red" }}>
                Invalid User Name please enter Less than 15 characters
              </span>
            )}
          </div>
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
              value={email}
              onChange={emailHandler}
            />
            {emailError && (
              <span style={{ color: "aqua" }}>
                Invalid Email please enter Correct Email Id less than 30
                characters{" "}
              </span>
            )}
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
              name="pSwd"
              value={password}
              onChange={passwordHandler}
            />
            {passwordError && (
              <span style={{ color: "maroon" }}>
                Invalid Password please enter less than 15 characters
              </span>
            )}
          </div>
      
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />{" "}
              Checkbox
            </label>
          </div>
          {/* here we close the only link tag after clicking the submit table displayed in below the submit button */}
         <Link to="/*">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </Link>
        </form>
      )}
<h1>User Data Table</h1>
{
  list.length>0?
  <>
  <table>
    <thead>
        <tr>
            <td>#Id</td>
            <td>Name</td>
            <td>Email -Id</td>
            <td>Dlt-Option</td>
       </tr>
    </thead>

    <tbody>
        { list.map((each,index)=>{
       return(
        <tr>
        <td>{index+1}</td>
        <td>{each.firstName}</td>
        <td>{each.lastName}</td>
        <td>{each.email}</td>
        {console.log(list)}
<button onClick={()=>deleteHandler(index)}>DELETE</button>
       </tr>
       )
        })}
    </tbody>
</table>
  </>:<h1></h1>
}
    </>
  );
}
export default RegistrationForm;
