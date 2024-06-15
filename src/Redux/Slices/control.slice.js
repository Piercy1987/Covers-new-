import { createSlice } from '@reduxjs/toolkit'

export const controlSlice = createSlice({
  name: 'Control',
  initialState: {
    editMode: false,
    previewMode: false,
    toast: {
      active: false,
      type: '',
      message: {
        title: '', 
        text: ''
      },
      time: 2000
    }
  },
  reducers: {
    setEditMode: (state, action) => {
        state.editMode = action.payload
    },
    setPreviewMode: (state) => {
      state.previewMode = !state.previewMode
    },
    setToast: (state, action) => {
      const { message, active, type, time = 2000} = action.payload
      state.toast = {
        active,
        type,
        message,
        time
      }
    },
    hideToast: (state, action) => {
      state.toast = {
        active: false,
        type: '',
        message: {
          title: '', 
          text: ''
        },
        time: 2000
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
  setEditMode, 
  setPreviewMode,
  setToast,
  hideToast
} = controlSlice.actions

export default controlSlice.reducer