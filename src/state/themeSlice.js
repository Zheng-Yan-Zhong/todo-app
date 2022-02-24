import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme', //使useSelector辨識
    initialState: {
        value: {
            bgc: 'whitesmoke',
            color: 'grey'
        }
    },
    reducers: {
        darkMode: (state, action) => {
            state.value = {
                bgc: '#2b2b29',
                color: 'grey'
            }
        },
        lightMode: (state, action) => {
            state.value = {
                bgc: 'whitesmoke',
                color: 'grey'
            }
        }
    }
})

export const { darkMode, lightMode } = themeSlice.actions

export default themeSlice.reducer //導出reducers