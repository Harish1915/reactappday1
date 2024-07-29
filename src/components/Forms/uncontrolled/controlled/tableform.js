import { useState } from "react";
import AppleForm from "../samsong";
import CookIng from "../../../data.js/data";

function ControlledForm1() {
  const [username, setUserName] = useState(""); //multiple state
  const [password, setPassword] = useState("");
  const [usernameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userData, setUserData] = useState({}); // line 41

  const submitHandler = (event) => {
    event.preventDefault();
    // If user name and password are there and there is no error, hit the API
    if (!usernameError && !passwordError) {
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
      console.log(finalResponse, "final response");
      if (finalResponse.message) {
        alert(finalResponse.message);
      } else {
        console.log(finalResponse, "final response");
        setUserData(finalResponse);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
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

  return (
    <>
      {
        // After submit showing data
        Object.keys(userData).length > 0
          ? (
            <>
              <h1>Welcome to My Recipes</h1>
              {/* <CookIng /> */}
              <table border="1px" style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", }}>
                <thead>
                  <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                    <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Key</th>
                    <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(userData).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value.toString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                    Invalid username, please enter less than 15 characters
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
                    Invalid password, please enter less than 15 characters
                  </span>
                )}
              </div>
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
    </>
  );
}

export default ControlledForm1;
