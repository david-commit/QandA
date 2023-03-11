import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
