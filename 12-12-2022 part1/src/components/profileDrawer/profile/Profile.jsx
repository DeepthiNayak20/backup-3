import { useDispatch } from 'react-redux'

import { showProfileFn } from '../../../redux/showProfile'

import './Profile.css'

const Profile = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <div className="profile-container">
        <div className="profile-text">Profile</div>
        <div
          className="profile edit"
          onClick={() => {
            dispatch(showProfileFn('edit'))
          }}
        >
          <img
            src={require('../../../assets/Shape.png')}
            alt=""
            className="profile-editImg"
          />
        </div>
      </div>
      <div className="profile-profilePic">
        <div className="profile-img">
          <img
            src={require('../../../assets/Screenshot 2022-05-16 104609.png')}
            alt=""
            className="profile-imgPic"
          />
        </div>
        <div className="profile-picText">Virat Kohli</div>
      </div>
      <div className="profile-body">
        <div className="profile-bodyContainer">
          <div className="profile-nameContent">
            <div className="prifile-nameStart">Name</div>
            <div className="profile-NameEnd">Virat Kohli</div>
          </div>
          <div className="profile-nameContent">
            <div className="prifile-nameStart">Email&nbsp;ID</div>
            <div className="profile-NameEnd">viratk@gmail.com</div>
          </div>
          <div className="profile-nameContent">
            <div className="prifile-nameStart">Mobile&nbsp;Number</div>
            <div className="profile-NameEnd">+91&nbsp;9844635685</div>
          </div>
          <div className="profile-nameContent">
            <div className="prifile-nameStart">Change&nbsp;Password</div>
            <div className="profile-NameEnd">
              <img
                src={require('../../../assets/DropdownArrow.png')}
                alt=""
                className="profilr-next"
                onClick={() => dispatch(showProfileFn('changePass'))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
