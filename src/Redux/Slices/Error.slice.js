import { createSlice } from '@reduxjs/toolkit'

export const errorSlice = createSlice({
  name: 'Error',
  initialState: {
    errors: []
  },
  reducers: {
    setError: (state, action) => {
      const errorArray = [...state.errors]
      errorArray.push(action.payload)
      state.errors = errorArray
    },
    resetErrors: (state) => {
      state.errors = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { setError, resetErrors } = errorSlice.actions

export default errorSlice.reducer