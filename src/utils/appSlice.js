import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
        onClickedVideoCardDetail:"",
        linkValue : ""
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        },
        updateSearchVal:(state,action)=>{
           state.linkValue = action.payload;
        },
        
    }
})
export const { toggleMenu,closeMenu,updateSearchVal } = appSlice.actions
export default appSlice.reducer;