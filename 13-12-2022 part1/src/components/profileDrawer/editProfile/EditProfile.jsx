import './EditProfile.css'

const EditProfile = () => {
  const loadFile = (e) => {
    var image = document.getElementById('output')
    image.src = URL.createObjectURL(e.target.files[0])
  }
  return (
    <div>
      <div className="editProfile-container">
        <div className="editProfilr-mainText">Edit Profile</div>
        <div class="profile-pic">
          <label class="-label" for="file">
            <span class="glyphicon glyphicon-camera"></span>
            <span className="editProfile-changeImg">
              {' '}
              <svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="editProfile-svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.592 2.352L17.778.528a1.794 1.794 0 00-2.544 0l-1.738 1.747 4.069 4.088 2.027-2.037a1.399 1.399 0 000-1.974zm-7.156.986l4.069 4.088L6.206 17.775 2.14 13.687l10.296-10.35zM.571 19.986a.464.464 0 01-.56-.553l1.028-4.64 4.066 4.089-4.534 1.104z"
                  fill="#fff"
                />
              </svg>
            </span>
          </label>
          <input
            id="file"
            type="file"
            className="editProfile-inputType"
            onChange={(e) => {
              loadFile(e)
            }}
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg"
            id="output"
            className="editProfile-output"
            alt=""
          />
        </div>
      </div>
      <div className="editProfile-form">
        <form action="" className="editProfile-formController">
          <div className="editProfile-body">
            <div className="profile-bodyContainer">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder=" "
                className="login-input editProfilr-color"
              />
              <label htmlFor="fullName" className="login-lable">
                Full&nbsp;Name
              </label>
            </div>
            <div className="profile-bodyContainer">
              <input
                type="text"
                id="emailId"
                name="emailId"
                placeholder=" "
                className="login-input editProfilr-color"
              />
              <label htmlFor="emailId" className="login-lable">
                Email&nbsp;ID
              </label>
            </div>
            <div className="profile-bodyContainer">
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                placeholder=" "
                className="login-input editProfilr-color"
              />
              <label htmlFor="mobileNo" className="login-lable">
                Mobile&nbsp;Number
              </label>
            </div>
            <div className="changePassword-buttonContaier">
              <button type="submit" className="changePAssword-button">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
