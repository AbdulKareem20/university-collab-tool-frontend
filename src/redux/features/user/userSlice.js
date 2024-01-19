import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:null,
    status:"idle",
    error:null
 }
export const userSlice = createSlice({
     name:"user",
    initialState,
     reducers:{
        setUser:(state,action) => {
            state.data = action.payload;
        },
         clearUser:(state) =>{
            state.data = null;
         }
     }

})




export const{setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;