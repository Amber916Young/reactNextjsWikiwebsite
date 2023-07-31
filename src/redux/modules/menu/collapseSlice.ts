import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface collapseState  {
    isCollapse: boolean;
}
const initialState = {
    isCollapse: false,
} 

export const collapseSlice = createSlice({
    name:"collapse",
    initialState,
    reducers:{
        changeCollapse:(state: { isCollapse: boolean; })=>{
            state.isCollapse = !state.isCollapse
        }
    }
})
 
export const {changeCollapse} = collapseSlice.actions;
export default collapseSlice.reducer;