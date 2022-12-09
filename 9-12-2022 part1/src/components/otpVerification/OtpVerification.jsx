import './OtpVerification.css'
// import OTPInput, { ResendOTP } from 'otp-input-react'
import OTPInput from 'otp-input-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OtpVerification = () => {
  const navigate = useNavigate()
  const [OTP, setOTP] = useState('')
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
      <div className="otp-otpContainer">
        <OTPInput
          value={OTP}
          onChange={setOTP}
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
      <button
        type="button"
        className="otp-verifyButton"
        onClick={() => {
          navigate('/newPassword')
        }}
      >
        Verify
      </button>
      {/* <div>
        <ResendOTP onResendClick={() => console.log('Resend clicked')} />
      </div> */}
    </div>
  )
}

export default OtpVerification
