import { Outlet } from 'react-router-dom'
import SuperSideBar from '../../components/superAdmin/SuperSideBar/SuperSideBar'
import SuperTopBar from '../../components/superAdmin/SuperTopBar/SuperTopBar'

import './SuperAdminDashBoard.css'

const SuperAdminDashBoard = () => {
  return (
    <div className="dashBoard-container">
      <div className="dashBoard-sideBar">
        <SuperSideBar />
      </div>
      <div className="dashBoard-topBar">
        <SuperTopBar />
      </div>
      <Outlet />
    </div>
  )
}

export default SuperAdminDashBoard
