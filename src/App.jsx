import React from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
     
    </div>
  )
}

export default App