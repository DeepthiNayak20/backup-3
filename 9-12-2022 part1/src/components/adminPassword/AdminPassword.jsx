import './AdminPassword.css'

const AdminPassword = () => {
  return (
    <div className="studentList-container">
      <div className="admin-changePassword">Change Password</div>
      <div className="admin-form">
        <form action="" className="admin-formController">
          <div className="admin-formContainer">
            <div className="admin-label">
              <label className="admin-label">Change Password</label>
              <input
                type="password"
                className="admin-input"
                placeholder="Placeholder text"
              />
            </div>

            <div className="admin-label">
              <label className="admin-label">New Password</label>
              <input
                type="password"
                className="admin-input"
                placeholder="Placeholder text"
              />
            </div>

            <div className="admin-label">
              <label className="admin-label">Confirm Password</label>
              <input
                type="password"
                className="admin-input"
                placeholder="Placeholder text"
              />
            </div>
          </div>

          <div className="admin-label">
            <button type="submit" className="admin-buttonSave">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminPassword
