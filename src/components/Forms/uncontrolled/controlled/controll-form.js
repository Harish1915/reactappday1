import { useState } from "react";
import AppleForm from "../samsong";
import CookIng from "../../../data.js/data";
import "./table.css";

function ControlledForm() {
  const [username, setUserName] = useState(""); //multiple state
  const [password, setPassword] = useState("");
  const [usernameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userData, setUserData] = useState({}); // line 41
  const [list, setList] = useState([]);

  //     const [formData,setData]=useState({ //single state
  // username:"",
  // password:"",
  //     });

  const submitHandler = (event) => {
    event.preventDefault();
    // if user name n password are there is no error in that case we can hit api other wise throw the error
    if (!usernameError && !passwordError) {
      // console.log("Success");
      successSubmit(username, password);
    }
  };
  const successSubmit = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const finalResponse = await response.json();
      // console.log(finalResponse, "final response");
      if (finalResponse.message) {
        alert(finalResponse.message);
      } else {
        console.log(finalResponse, "final response");
        const totalname = finalResponse.firstName + finalResponse.lastName;
        setUserName(""); // after submit user and password columns will be empty
        setPassword("");

        const userExists = list.includes(totalname);
        if (userExists) {
          alert("user already exists");
        } else {
          setList([...list, totalname]); // same page submit button bottom output will display
        }

        //  setUserData(finalResponse); // after submit output
      }
    } catch (err) {}
  };

  const userNameHandler = (event) => {
    const userEnteredValue = event.target.value;
    setUserName(userEnteredValue);
    console.log(userEnteredValue, "userEnteredValues...");

    if (FormValidate(userEnteredValue)) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
  };

  const passwordHandler = (event) => {
    const userPasswordEnteredValue = event.target.value;
    setPassword(userPasswordEnteredValue);
    setPasswordError(true);
    console.log(userPasswordEnteredValue, "passwordEnteredValue.......");

    if (FormValidate(userPasswordEnteredValue)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const FormValidate = (value) => {
    return value.length > 15;
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <>
      {
        // after submit showing data
        Object.keys(userData).length > 0 ? (
          <>
            <h1>well come TO mY rEcIpS </h1>
            <CookIng />
          </>
        ) : (
          <form onSubmit={submitHandler} style={{ maxWidth: 450 }}>
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
                value={username}
                onChange={userNameHandler}
              />
              {usernameError && (
                <span style={{ color: "red" }}>
                  Invalid username please enter less than 15 characters
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
                <span style={{ color: "red" }}>
                  Invalid password please enter less than 15 characters
                </span>
              )}
            </div>
            {/* {error && <h1 style={{ color: "orange" }}>{error}</h1>} */}
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
      }

      <h2>list of register users </h2>

      <table className="table">
        <thead>
          <tr>
            <td>#</td>
            <td>User-Name</td>
            <td>D-Option</td>
          </tr>
        </thead>
      
      <tbody>
        {list.map((each,index)=>(
          <tr>
            <td> {index+1}</td>
            <td>{each}</td>
            <td><button onClick={()=>handleDelete(index)}>button</button></td>
          </tr>
        ))}
      </tbody>
      </table>
      {/* <ol>
        {

          list.map((each,index)=>(
            <li>
{each}
{<button onClick={()=>handleDelete(index)}> DELETE </button>}
            </li>
            
          ))
      }
      </ol> */}
    </>
  );
}
export default ControlledForm;

// fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   })
//     .then((res) => res.json())
//     .then(console.log);
