import React, { Component } from "react";
// For Routers 
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components 
import Header from "../components/Header";
import Footer from "../components/Footer";
// Pages 
import Home from "./Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Fruits from "./Home/Fruits"
import Login from "./Login/Login"
import Register from "./Register/Register";
import NoPage from "./NoPage/NoPage";

export default function CustomRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
       
          <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/fruits" element={<Fruits />} />
          <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />


             <Route path="/*" element={<NoPage />} />
          
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
