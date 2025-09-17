import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing"
import ForgotPassword from './components/Forgot/forgot';
import Login from './components/Login/login';
function App() {

  return (
    <>
      <Login />
    </>
  )
}

export default App
