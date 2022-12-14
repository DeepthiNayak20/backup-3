import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashBoard from '../../views/dashBoard/DashBoard'
import Home from '../../views/home/Home'
import AddCourse from '../addCourse/AddCourse'
import Certificate from '../AddCoursesFolder/certificate/Certificate'
import QandA from '../AddCoursesFolder/QandA/QandA'
import Upload from '../AddCoursesFolder/uploadVideos/Upload'
import AdminPassword from '../adminPassword/AdminPassword'
import ForgotPassword from '../forgotPassword/ForgotPassword'
import Login from '../login/Login'
import MainBoard from '../mainBoard/MainBoard'
import NewPassword from '../newPassword/NewPassword'
import OtpVerification from '../otpVerification/OtpVerification'
import ChangePassword from '../profileDrawer/changePassword/ChangePassword'
import EditProfile from '../profileDrawer/editProfile/EditProfile'
import Profile from '../profileDrawer/profile/Profile'
import StudentList from '../studentList/StudentList'
import ViewAll from '../viewAllHomePage/ViewAll'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Login />} />
          <Route path="otp" element={<OtpVerification />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="newPassword" element={<NewPassword />} />
        </Route>
        <Route path="/dashBoard" element={<DashBoard />}>
          <Route path="" element={<MainBoard />}></Route>
          <Route path="main" element={<MainBoard />}></Route>
          <Route path="viewAll" element={<ViewAll />} />
          <Route path="addCourses" element={<AddCourse />}>
            <Route path="" element={<Upload />} />
            <Route path="upload" element={<Upload />} />
            <Route path="QandA" element={<QandA />} />
            <Route path="certificate" element={<Certificate />} />
          </Route>
          <Route path="studentList" element={<StudentList />} />
          <Route path="settings" element={<AdminPassword />} />

          <Route path="profile" element={<Profile />}>
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="changePassword" element={<ChangePassword />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default Router
