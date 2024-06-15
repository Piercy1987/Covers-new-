import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'User',
  initialState: {
    user: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    logOutUser: (state) => {
      state.user = {}
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, logOutUser } = userSlice.actions

export default userSlice.reducer