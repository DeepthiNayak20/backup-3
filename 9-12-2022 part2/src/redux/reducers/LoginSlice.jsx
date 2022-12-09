import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: {},
  // isSuccess: false,
  // loading: false,
  userName: '',
}

export const LoginAsyncThunk = createAsyncThunk(
  'Login/LoginAsyncThunk',
  async (arg, { rejectWithValue }) => {
    console.log('arg', arg)
    try {
      const fetchedData = await axios({
        method: 'post',
        url: `http://admin-env.eba-mh8pph25.ap-south-1.elasticbeanstalk.com/admin/login`,
        data: {
          userName: arg.userName,
          password: arg.password,
        },
      })
      console.log('fetchedData', fetchedData)

      return fetchedData
    } catch (err) {
      let error = err
      console.log('error.response.data', error.response.data)

      return rejectWithValue(error.response.data)
    }
  },
)

export const LoginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoginAsyncThunk.pending, (state, action) => {
      console.log('fetching Data...')
    })
    builder.addCase(LoginAsyncThunk.fulfilled, (state, action) => {
      // console.log('fetched Data Successfully')
      state.data = action
    })
    builder.addCase(LoginAsyncThunk.rejected, (state, action) => {
      console.log('rejected')
      state.data = action
    })
  },
  // extraReducers: {
  //   [LoginAsyncThunk.pending]: (state, action) => {
  //     console.log('fetching Data...')
  //   },
  //   [LoginAsyncThunk.fulfilled]: (state, action) => {
  //     console.log('fetched Data Successfully')
  //     return action.payload.fetchedData
  //   },
  // },
})

// Action creators are generated for each case reducer function
export const {} = LoginSlice.actions

export default LoginSlice
