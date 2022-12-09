import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ForgotPassword = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Enter a valid email Id')
        .required('Please enter your email'),
    }),

    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div>
      <div className="otpVerifivation-container">
        <div className="otp-verification">Forgot Password</div>
        <div className="otp-verifyText">
          Please enter your Email ID. You will receive
          <br /> a code to create a new password.
        </div>
      </div>
      <form action="" className="login-loginContainer">
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" "
          className="login-input"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="email" className="login-lable">
          Email Id
        </label>
        {formik.errors.email ? (
          <p className="error-msg">{formik.errors.email}</p>
        ) : null}
        <button
          type="submit"
          className="otp-verifyButton"
          onClick={() => {
            navigate('/otp')
          }}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword
