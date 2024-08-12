import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Signup from '../Pages/SignUp/Signup'
import Header from '../Pages/Home/Header'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import User from '../Pages/Dashboard/Users/User'
import Supervisor from '../Pages/Dashboard/Supervisor/Supervisor'
import Asignee from '../Pages/Dashboard/Asignee/Asignee'
import AddGrievance from '../Pages/Dashboard/Users/AddGrievance'
import TrackGrievance from '../Pages/Dashboard/Users/TrackGrievance'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <Signup />
            </>
          }
        />
        <Route path="/user_home" element={<User />} />
        <Route path="/user_home/track_grievance" element={<TrackGrievance />} />
        <Route path="/supervisor_home" element={<Supervisor />} />
        <Route path="/asignee_home" element={<Asignee />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user_home/add_grievance" element={<AddGrievance />} />
      </Routes>
    </BrowserRouter>
  );
}
