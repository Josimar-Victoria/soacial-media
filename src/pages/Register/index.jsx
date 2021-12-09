import React, { useState } from "react";
import Axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleRegister = () => {
    Axios.post("http://localhost:3001/user/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
    navigate("/");
  };
  
  return (
    <div className="register">
      <h2>Registration</h2>
      <div className="register_form">
        <input
          type="text"
          placeholder="Username..."
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}
