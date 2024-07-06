import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Signup from '../Pages/SignUp/Signup'
export default function Navigation() {
  return (
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signup/>} />
        </Routes>
   </BrowserRouter>
  )
}
