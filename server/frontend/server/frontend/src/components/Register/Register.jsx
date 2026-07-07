import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = async (e) => {
    e.preventDefault();
    let register_url = window.location.origin + "/djangoapp/register";
    
    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });
    
    const json = await res.json();
    if (json.status) {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else {
      alert("The user with same username is already registered");
      window.location.href = window.location.origin + "/register";
    }
  };

  return (
    <div className="register_container" style={{ width: "50%", margin: "auto", marginTop: "50px" }}>
      <div className="header" style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 className="text" style={{ fontWeight: "bold" }}>Sign Up</h2>
      </div>
      <hr />
      <form onSubmit={register}>
        <div className="inputs" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          {/* 1. Username Field */}
          <div className="input">
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter Username" className="input_field form-control" onChange={(e) => setUserName(e.target.value)} required />
          </div>

          {/* 2. First Name Field */}
          <div className="input">
            <label>First Name</label>
            <input type="text" name="first_name" placeholder="Enter First Name" className="input_field form-control" onChange={(e) => setFirstName(e.target.value)} required />
          </div>

          {/* 3. Last Name Field */}
          <div className="input">
            <label>Last Name</label>
            <input type="text" name="last_name" placeholder="Enter Last Name" className="input_field form-control" onChange={(e) => setLastName(e.target.value)} required />
          </div>

          {/* 4. Email Field */}
          <div className="input">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter Email" className="input_field form-control" onChange={(e) => setEmail(e.target.value)} required />
          </div>

          {/* 5. Password Field */}
          <div className="input">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter Password" className="input_field form-control" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          
        </div>
        
        {/* Register Button */}
        <div className="submit_panel" style={{ textAlign: "center", marginTop: "30px" }}>
          <button className="submit btn btn-primary" type="submit" style={{ width: "200px" }}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
