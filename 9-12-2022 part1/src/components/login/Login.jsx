import './Login.css'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAsyncThunk } from '../../redux/reducers/LoginSlice'
import { useEffect } from 'react'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const loginData = useSelector((state) => state.Login)
  // console.log('loginData', loginData)
  // useEffect(() => {
  //   console.log('loginData', loginData)
  // }, [])

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },

    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, 'Must be 15 charecters or less')
        .required('Required*'),
      password: Yup.string().required('Required*'),
    }),

    onSubmit: (values) => {
      // console.log('sads', values)
    },
  })

  const submitHandler = (e) => {
    e.preventDefault()
    // const userName = formik.values.userName
    // const password = formik.values.password
    dispatch(
      LoginAsyncThunk({
        userName: formik.values.userName,
        password: formik.values.password,
      }),
      // navigate('/dashBoard'),
    )
  }

  // console.log(formik.errors)
  return (
    <div>
      <form
        action=""
        className="login-loginContainer"
        onSubmitCapture={(e) => {
          formik.handleSubmit()
          submitHandler(e)
        }}
      >
        <input
          type="text"
          name="userName"
          placeholder=" "
          className="login-input"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="userName" className="login-lable">
          User Name
        </label>
        {formik.errors.userName ? (
          <p className="error-msg">{formik.errors.userName}</p>
        ) : null}
        <input
          type="password"
          id="password"
          name="password"
          placeholder=" "
          className="login-input"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="password" className="login-lable">
          Password
        </label>
        {formik.errors.password ? (
          <p className="error-msg">{formik.errors.password}</p>
        ) : null}
        <div>
          <div
            className="login-forgotPassword"
            onClick={() => {
              navigate('/forgotPassword')
            }}
          >
            Forgot Password ?
          </div>
          <div className="login-buttonContainer">
            <button type="submit" className="login-loginButton">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
