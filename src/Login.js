import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
  });

  const handleFirstNameInputHandler = (event) => {
    setValue({ ...value, firstname: event.target.value });
  };
  const handleLastNameInputHandler = (event) => {
    setValue({ ...value, lastname: event.target.value });
  };
  const handleemailInputHandler = (event) => {
    setValue({ ...value, email: event.target.value });
  };
  const handleUsernameInputHandler = (event) => {
    setValue({ ...value, username: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);

    if (value.username.length <= 10) {
      alert("It should be more than 10");
    }
  };

  return (
    <div className="container__1">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>LOGIN PAGE</h1>
        <br />
        {/*<div>
        <label className="label">FIRSTNAME</label>
        <input required className="input" onChange ={handleFirstNameInputHandler} value={value.firstname} name="firstname" type="text"></input>
      </div>*/}
        {/*<div>
        <label className="label">LASTNAME</label>
        <input required className="input" onChange ={handleLastNameInputHandler} value={value.lastname} name="lastname" type="text"></input>
      </div>*/}
        <div>
          <div>
            <label className="label">USERNAME</label>
            <input
              required
              className="input"
              onChange={handleUsernameInputHandler}
              value={value.username}
              name="username"
              type="text"
            ></input>
          </div>
        </div>
        <div>
          <label className="label">EMAIL OR PHONE</label>
          <input
            required
            className="input"
            onChange={handleemailInputHandler}
            value={value.email}
            name="email"
            type="text"
          ></input>
        </div>
        <div>
          <a href="">Forgot password</a>
        </div>
        <div className="btn">
          <div className="inner">
            <button type="submit" className="submit" value="SUBMIT">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
