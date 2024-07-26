import { useRef, useState } from "react";
import "./samsong.css";

const AppleForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const zipcodeRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();

  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    // Access values from refs
    const Name = nameRef.current.value;
    const email = nameRef.current.value;
    const phoneNumber = nameRef.current.value;
    const Address = nameRef.current.value;
    const ZipCode = nameRef.current.value;
    const date = dateRef.current.value;
    const time = timeRef.current.value;

    setError("");

    // NAME Validation
    if (Name.length < 3) {
      setError("Name should be at least 3 characters long.");
    }

    //  email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email address.");
    }

    // Phone number validation
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Phone number should be exactly 10 digits.");
    }

    // Address  validation
    if (Address.length < 10) {
      setError("Address should be at least 10 characters long.");
    }

    // ZIP Code validation
    if (!/^\d{5}$/.test(ZipCode)) {
      setError("ZIP Code should be exactly 5 digits.");
    }
    if (!date) {
      setError("Please select a date.");
      return;
    }

    if (time) {
      setError("Please select a time.");
      return;
    }

    // If all validations pass
    alert("Form submitted successfully!");

    console.log(Name, email, phoneNumber, Address, ZipCode, date, time);
  };

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={submitHandler} className="form-container">
        <span className="span">Customer Details</span>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input id="date" type="date" ref={dateRef} className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input id="time" type="time" ref={timeRef} className="form-input" />
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input type="text" ref={nameRef} placeholder="Username"/>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" ref={emailRef} placeholder="Emailid@" />
        </div>

        <div className="form-group">
          <label>Phone NO:</label>
          <input type="tel" ref={phoneRef} placeholder="Phone number"/>
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input type="text" ref={addressRef}  placeholder="Address"/>
        </div>

        <div className="form-group">
          <label>ZIP Code:</label>
          <input type="text" ref={zipcodeRef} placeholder="5 digit Zip-code"/>
        </div>

        <div>
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
export default AppleForm;
