import logo from './logo.svg';
import './App.css';
import React from 'react';
import hero from './JSX/Hero'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detial from './JSX/Detail';
import Home from './/JSX/HOME';
import Login from './JSX/Login'
import Signup from './JSX/Sing'
import BlogDetail from './JSX/BlogCardMoreDetails';
import   Navbar  from './JSX/Navbar';
import Foot from './JSX/Footer';
import ContactUs from './JSX/ContactUs';
import About from './JSX/AboutUs';
import Hero from './JSX/Hero';
function App() {
  return (
    <div className="App">
      
      <Router>
       <Navbar/>
   
       <Hero/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="AboutUs" element={<About />} />
          <Route path="detial" element={<Detial/>}/>
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="Sing" element={<Signup />} />
          <Route path='/blog/:id' element={<BlogDetail/>}/>
        </Routes> 
        {/* <Login/> */}
        {/* <Signup/> */}

        <Foot/>
      </Router>
      

      
      
    </div>
  );
}

export default App;