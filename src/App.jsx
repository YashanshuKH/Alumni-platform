import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>


  )
}

export default App
