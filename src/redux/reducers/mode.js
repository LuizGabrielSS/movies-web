import { createSlice } from '@reduxjs/toolkit'

const LightMode = {
    mode: 'light',
    primary:{
        main:"#3333ff"
    },
    secondary: {
        main: '#131052',
    },
}

const DarkMode = {
    mode: 'dark',
    primary:{
        main:"#1a1a1a"
    },
    secondary: {
        main: '#131052',
    },
}

export const ModeSlice = createSlice({
    name:'mode',
    initialState:{
        darkmode:LightMode
    },
    reducers:{
        ChangeMode: (state, action) => {
            state.darkmode = action.payload ? DarkMode : LightMode
        }
    }
})

export const {ChangeMode} = ModeSlice.actions

export default ModeSlice.reducer