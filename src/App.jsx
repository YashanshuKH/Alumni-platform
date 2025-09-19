import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Login from './components/Login/login'
import Dashboard from './components/Dashboard/Dashboard';
import Event from './components/Event/Event';
import Admin from './components/Admin/Admin';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/random" element={<Event />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>

  )
}

export default App
