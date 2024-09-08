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
import ViewStatus from '../Pages/Dashboard/Users/ViewStatus'
import AddFeedback from '../Pages/Dashboard/Users/AddFeedback'

import { UserDetails} from '../Hooks/context/UserDetails'
import { UserGrievance } from '../Hooks/context/UserGrievance'

import ApproveRejectGrievance from '../Pages/Dashboard/Supervisor/ApproveRejectGrievance'
import { AssignGrievance } from '../Pages/Dashboard/Supervisor/AssignGrievance'
import GenerateReport from '../Pages/Dashboard/Supervisor/GenerateReport'
import MonitorProgress from '../Pages/Dashboard/Supervisor/MonitorProgress'
import ReviewUserFeedback from '../Pages/Dashboard/Supervisor/ReviewUserFeedback'
import ViewAllGrievance from '../Pages/Dashboard/Supervisor/ViewAllGrievance'


import CloseGrievance from '../Pages/Dashboard/Asignee/CloseGrievance'
import UpdateGrievanceStatus from '../Pages/Dashboard/Asignee/UpdateGrievanceStatus'
import TrackWorkload from '../Pages/Dashboard/Asignee/TrackWorkload'
import ViewMyAssignments from '../Pages/Dashboard/Asignee/ViewMyAssignments'


export default function Navigation() {
  return (
    <UserDetails>
      <UserGrievance>
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
            <Route
              path="/user_home/track_grievance"
              element={<TrackGrievance />}
            />
            <Route path="/user_home/view_status" element={<ViewStatus />} />
            <Route path="/user_home/add_feedback" element={<AddFeedback />} />
            <Route path="/supervisor_home" element={<Supervisor />} />
            <Route
              path="/supervisor_home/assign_grievance"
              element={<AssignGrievance />}
            />
            <Route
              path="/supervisor_home/approve_reject_grievance"
              element={<ApproveRejectGrievance />}
            />
            <Route
              path="/supervisor_home/generate_report"
              element={<GenerateReport />}
            />
            <Route
              path="/supervisor_home/monitor_progress"
              element={<MonitorProgress />}
            />
            <Route
              path="/supervisor_home/review_user_feedback"
              element={<ReviewUserFeedback />}
            />
            <Route
              path="/supervisor_home/view_all_grievance"
              element={<ViewAllGrievance />}
            />

            <Route path="/asignee_home" element={<Asignee />} />
            <Route
              path="/asignee_home/close_grievance"
              element={<CloseGrievance />}
            />
            <Route
              path="/asignee_home/track_workload"
              element={<TrackWorkload />}
            />
            <Route
              path="/asignee_home/update_grievance_status"
              element={<UpdateGrievanceStatus />}
            />
            <Route
              path="/asignee_home/view_my_assignment"
              element={<ViewMyAssignments />}
            />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user_home/add_grievance" element={<AddGrievance />} />
          </Routes>
        </BrowserRouter>
      </UserGrievance>
    </UserDetails>
  );
}
