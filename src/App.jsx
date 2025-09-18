import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Login from './components/Login/login'
import Dashboard from './components/Dashboard/Dashboard';
import Random from './components/example/Random';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/random" element={<Random />} />
    </Routes>

  )
}

export default App
