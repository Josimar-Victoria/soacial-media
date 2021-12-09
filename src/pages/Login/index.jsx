import React, { useState } from "react";
import Axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let navigate = useNavigate();

  const handleLogin = () => {
    Axios.post("http://localhost:3001/user/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
        navigate("/");
      } else {
        setErrorMessage(response.data.message);
      }
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login_form">
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
        <button onClick={handleLogin}>Login</button>
        <h2 style={{ color: "red" }}>{errorMessage}</h2>
      </div>
    </div>
  );
}
