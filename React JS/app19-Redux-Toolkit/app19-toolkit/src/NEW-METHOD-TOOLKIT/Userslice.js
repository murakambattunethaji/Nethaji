import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: ["nethaji", "sai", "vijay", "dinesh", "reddy"]
}
export const Userslice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {},
})

export default Userslice.reducer