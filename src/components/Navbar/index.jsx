import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, []);

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {loggedIn ? (
        <>
          <Link to="/upload">Upload</Link>
          <Link to="/profile">Profile</Link>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
