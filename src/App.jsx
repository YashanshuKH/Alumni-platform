import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}

export default App
