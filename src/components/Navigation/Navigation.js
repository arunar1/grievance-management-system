import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
export default function Navigation() {
  return (
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
   </BrowserRouter>
  )
}
