import { configureStore } from '@reduxjs/toolkit'
import ErrorSlice from './Slices/Error.slice'
import userSlice from './Slices/User.slice'
import configSlice from './Slices/config.slice'
import controlSlice from './Slices/control.slice'

export default configureStore({
    reducer: {
        error: ErrorSlice,
        users: userSlice,
        webConfig: configSlice,
        control: controlSlice
    }
  })