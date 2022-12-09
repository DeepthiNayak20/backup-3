import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './reducers/LoginSlice'

import showProfileSlice from './showProfile'

export const store = configureStore({
  reducer: {
    showProfile: showProfileSlice.reducer,
    Login: LoginSlice.reducer,
  },
})
