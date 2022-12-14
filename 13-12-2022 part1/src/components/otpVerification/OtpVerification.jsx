import './OtpVerification.css'
// import OTPInput, { ResendOTP } from 'otp-input-react'
import OTPInput from 'otp-input-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const OtpVerification = () => {
  const navigate = useNavigate()
  const [otp, setOTP] = useState('')

  const EmailIdEntered = useSelector((state) => state.emailSend.emailId)

  const otpSubmitHandler = (e) => {
    e.preventDefault()
    console.log('EmailIdEntered', EmailIdEntered)
    console.log('otp', otp)

    axios(
      `http://admin-env.eba-mh8pph25.ap-south-1.elasticbeanstalk.com/admin/verify`,
      {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        data: {
          emailId: EmailIdEntered,
          otp: otp,
        },
      },
    )
      .then((res) => {
        if (res) {
          alert('data')
          // alert(res.data)
          // console.log('res.dataotp', res.data)

          if (res.status === 200) {
            navigate('/newPassword')
          }
        }
      })
      .catch((err) => {
        // alert(err.response.data)
        alert('error')
      })

    // const otp = e.target.otp.value
    // console.log(JSON.stringify(e.target.OTP.value))
    // console.log('otp', e.target.otp.value)
  }

  return (
    <div>
      {' '}
      <div className="otpVerifivation-container">
        <div className="otp-verification">Verification</div>
        <div className="otp-verifyText">
          Please fill in the verification code that has
          <br /> been sent to your Email ID.
        </div>
      </div>
      <form
        action=""
        className="otp-formController"
        onSubmit={(e) => {
          otpSubmitHandler(e)
        }}
      >
        <div className="otp-otpContainer">
          <OTPInput
            value={otp}
            // onChange={(e) => setOTP(e.target.value)}
            onChange={setOTP}
            name="OTP"
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            inputStyles={{
              borderBottom: '1px solid #072D5B',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              width: '2.7rem',
            }}
          />
        </div>
        <div className="otp-resendCode">
          Didn’t receive a code? <span className="otp-resend">Resend</span>
        </div>
        <button type="submit" className="otp-verifyButton">
          Verify
        </button>
      </form>
      {/* <div>
        <ResendOTP onResendClick={() => console.log('Resend clicked')} />
      </div> */}
    </div>
  )
}

export default OtpVerification
