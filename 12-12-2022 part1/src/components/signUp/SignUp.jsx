import './SignUp.css'

const SignUp = () => {
  return (
    <div>
      {' '}
      <div>
        <form action="" className="login-loginContainer">
          <div className="signUp-container">
            {/* name */}
            <input
              type="text"
              name="userName"
              placeholder=" "
              className="login-input"
            />
            <label htmlFor="userName" className="login-lable">
              User Name
            </label>
            {/* email id */}
            <input
              type="text"
              name="email"
              placeholder=" "
              className="login-input"
            />
            <label htmlFor="email" className="login-lable">
              Email Id
            </label>
            {/* mobile */}
            <input
              type="text"
              name="mobileNo"
              placeholder=" "
              className="login-input"
            />
            <label htmlFor="mobileNo" className="login-lable">
              Mobile No
            </label>
            {/* password */}
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              className="login-input"
            />
            <label htmlFor="password" className="login-lable">
              Password
            </label>
            {/* about me */}
            <textarea
              type="text"
              name="aboutMe"
              placeholder=" "
              className="signUp-input"
            />
            <label htmlFor="aboutMe" className="login-lable">
              About Me
            </label>
          </div>

          <div>
            <div className="button-loginContainer">
              <div className="login-buttonContainer">
                <button type="submit" className="login-loginButton">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
