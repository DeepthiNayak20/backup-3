import './SignUp.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { storePass } from '../../redux/reducers/regDetailSlice'

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      mobileNo: '',
      designation: '',
      profilePhoto: '',
      url: '',
      description: '',
    },

    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, 'Must be 15 charecters or less')
        .required('Required*'),
      email: Yup.string()
        .email('Enter a valid email Id')
        .required('Please enter your email'),
      designation: Yup.string().required('Required*'),
      mobileNo: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('Please enter your mobile Number'),
      url: Yup.string().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!',
      ),
    }),

    onSubmit: (values) => {
      console.log('Sign up values', values)
      // dispatch(storePass(values));
      fetch(
        `http://admin-env.eba-mh8pph25.ap-south-1.elasticbeanstalk.com/admin/register`,
        {
          method: 'post',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            emailId: values.email,
            fullName: values.userName,
            profilePhoto: '',
            mobileNumber: values.mobileNo,
            designation: values.designation,
            description: values.description,
            url: values.url,
          }),
        },
      )
        .then((res) => {
          // if (res) {
          //   alert("data");

          //   if (res.status === 200) {
          //     // navigate("/signup/verifyotp");
          //     alert("Your details are successfully Registered.")
          //   }
          // }
          console.log('result', res)
        })
        .catch((err) => {
          alert('error')
          console.log('error', err)
        })
    },
  })
  const dispatch = useDispatch
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      {' '}
      <div>
        <form
          action=""
          className="login-loginContainer"
          onSubmit={(e) => {
            formik.handleSubmit()
            submitHandler(e)
          }}
        >
          <div className="signUp-container">
            {/* name */}
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
              Full Name
            </label>
            {formik.errors.userName && formik.touched.userName ? (
              <p className="error-msg">{formik.errors.userName}</p>
            ) : null}
            {/* email id */}
            <input
              type="text"
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
            {formik.errors.email && formik.touched.email ? (
              <p className="error-msg">{formik.errors.email}</p>
            ) : null}
            {/* mobile */}
            <input
              type="text"
              name="mobileNo"
              placeholder=" "
              className="login-input"
              value={formik.values.mobileNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="mobileNo" className="login-lable">
              Mobile Number
            </label>
            {formik.errors.mobileNo && formik.touched.mobileNo ? (
              <p className="error-msg">{formik.errors.mobileNo}</p>
            ) : null}
            {/* hidden */}
            <input
              type="hidden"
              name="profilePhoto"
              placeholder=" "
              className="login-input"
              value={formik.values.profilePhoto}
            />
            {/* designation */}
            <input
              type="text"
              id="designation"
              name="designation"
              placeholder=" "
              className="login-input"
              value={formik.values.designation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="designation" className="login-lable">
              Designation
            </label>
            {formik.errors.designation && formik.touched.designation ? (
              <p className="error-msg">{formik.errors.designation}</p>
            ) : null}

            <input
              type="text"
              id="url"
              name="url"
              placeholder=" "
              className="login-input"
              value={formik.values.url}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="designation" className="login-lable">
              URL
            </label>
            {formik.errors.url && formik.touched.url ? (
              <p className="error-msg">{formik.errors.url}</p>
            ) : null}
            {/* about me */}
            <textarea
              type="text"
              name="description"
              placeholder=" "
              className="signUp-input"
            />
            <label htmlFor="description" className="login-lable">
              Description
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
