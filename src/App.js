import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../src/pages/Home"
import AddEditUser from '../src/pages/AddEditUser';
import About from '../src/pages/About';
import UserInfo from '../src/pages/UserInfo'
import Header from "../src/components/Header"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/addUser" element={<AddEditUser />}/>
          <Route path="/editUser/:id" element={<AddEditUser />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/userinfo/:id" element={<UserInfo />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
