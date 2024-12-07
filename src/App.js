import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home1/Home';
import Signup from './Pages/Signup1/Signup'; // Add Signup page import
import Login from './Pages/Login1/Login'; // Add Login page import

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* Ensure Login route is added */}
      </Routes>
    </div>
  );
}

export default App;
