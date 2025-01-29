import { createSlice } from "@reduxjs/toolkit";

export const userslice =createSlice({
    name:"users",
    initialState:["name","email"],
    reducers:{}
});
export default userslice.reducer;