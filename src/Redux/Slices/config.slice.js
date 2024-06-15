import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
  name: 'config',
  initialState: {
    config: {
        tab: [
            {
                homePageData: {
                    section1: {
                        title: '',
                        paragraph: ''
                    }
                }
            },
            {
                setList : {
                    section1: {
                        headerText: 'test'
                    },
                    section2: {
                        tableRowData: [

                        ]
                    }
                }
            }
        ]
    },
    editedConfig: {
        tab: [
            {
                homePageData: {
                    section1: {
                        title: '',
                        paragraph: ''
                    }
                }
            },
            {
                setList : {
                    section1: {
                        headerText: ''
                    },
                    section2: {
                        tableRowData: [

                        ]
                    }
                }
            }
        ]
    }

  },
  reducers: {
    setConfig: (state, action) => {
        state.config = action.payload
    },
    setEditConfig: (state, action) => {
        state.editedConfig = action.payload
    },
    setTitle: (state, action) => {
        state.editedConfig.tab[0].homePageData.section1.title = action.payload
    },
    setParagraph: (state, action) => {
        state.editedConfig.tab[0].homePageData.section1.paragraph = action.payload
    },
    newSetlist: (state, action) => {
        const newRow = [...state.editedConfig.tab[1].setList.section2.tableRowData, action.payload]
        state.editedConfig.tab[1].setList.section2.tableRowData = newRow
    },
    editSetlistRow: (state, action) => {
        const { value, id, field } = action.payload;
        const updatedData = state.editedConfig.tab[1].setList.section2.tableRowData.map((row) => {
            if (row.id === id) {
                return { ...row, [field]: value };
            }
            return row;
        });
        state.editedConfig.tab[1].setList.section2.tableRowData = updatedData;
    },
    deleteRow: (state, action) => {
        const idToDelete = action.payload;
        state.editedConfig.tab[1].setList.section2.tableRowData = state.editedConfig.tab[1].setList.section2.tableRowData.filter(row => row.id !== idToDelete);
    },
    setSetlistSection1HeaderText: (state, action) => {
        state.editedConfig.tab[1].setList.section1.headerText = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
    setConfig, 
    setEditConfig, 
    setTitle,
    setParagraph,
    newSetlist,
    editSetlistRow,
    deleteRow,
    setSetlistSection1HeaderText
 } = configSlice.actions

export default configSlice.reducer