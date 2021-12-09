import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";

// import Blog from "./routes/Blog";
// import Contacto from "./routes/Contacto";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="upload" element={<Upload />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
