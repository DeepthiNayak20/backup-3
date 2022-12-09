import './ChangePassword.css'

const ChangePassword = () => {
  return (
    <div>
      <div className="chanePassword-mainText">Change Password</div>
      <div className="editProfile-form">
        <form action="" className="editProfile-formController">
          <div className="editProfile-body">
            <div className="profile-bodyContainer">
              <input
                type="password"
                id="currentPass"
                name="currentPass"
                placeholder=" "
                className="login-input editProfilr-color"
              />
              <label htmlFor="currentPass" className="login-lable">
                Current&nbsp;Password
              </label>
            </div>
            <div className="profile-bodyContainer">
              <input
                type="password"
                id="newPass"
                name="newPass"
                placeholder=" "
                className="login-input editProfilr-color"
              />
              <label htmlFor="newPass" className="login-lable">
                New&nbsp;Password
              </label>
            </div>
            <div className="profile-bodyContainer">
              <input
                type="password"
                id="confirmPass"
                name="confirmPass"
                placeholder=" "
                className="login-input editProfilr-color"
              />
              <label htmlFor="confirmPass" className="login-lable">
                Confirm&nbsp;Password
              </label>
            </div>
            <div className="changePassword-buttonContaier">
              <button type="submit" className=" changePAssword-button">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
