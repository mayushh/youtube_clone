import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
        onClickedVideoCardDetail:[]
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        },
        updateOnClickedVideoDetail:(state,action)=>{
            state.onClickedVideoCardDetail.push(action.payload)
        },
        
    }
})
export const { toggleMenu,closeMenu,updateOnClickedVideoDetail } = appSlice.actions
export default appSlice.reducer;