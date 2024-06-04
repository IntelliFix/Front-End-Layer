import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Components/NavBar/NavBar.js";
import { Landing } from "./Components/Landing/Landing.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import { Chat } from "./Components/Chatbot/ChatPage.jsx";
import { Authentication } from "./Components/Authentication/Authentication.js";

import React from "react";
import Codefixer from "./Components/Codefixer/Codefixer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

import PageTitle from "./PageTitle.js";

function App() {
  return (
    <Router>
      <PageTitle />
      {" "}
      {/* Wrap the entire component tree with Router */}
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />{" "}
          {/* Use element prop instead of component */}
          <Route path="/Authentication" element={<Authentication />} />
          {/* <Route path="/Chatbot" element={<Chat />} /> */}
          <Route path="/Chatbot" element={<ProtectedRoute element={Chat} />} />
          {/* <Route path="/Codefixer" element={<Codefixer />} /> */}
          <Route path="/Codefixer" element={<ProtectedRoute element={Codefixer} />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
