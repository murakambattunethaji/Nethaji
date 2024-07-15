import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: ["nethaji", "sai", "vijay", "dinesh", "reddy"],
};
const Userslice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        createuser: (state, action) => {
            state.users.push(action.payload)
        },
        readuser: () => { },

        updateuser: (state, action) => {
            const { index, newuser } = action.payload
            if (index >= 0 && index < state.users.length) {
                state.users[index] = newuser

            }
        },

        deleteuser: (state, action) => {
            state.users = state.users.filter((usr) => usr !== action.payload)
        }

    },
})

export default Userslice.reducer;
export const { createuser, deleteuser, updateuser } = Userslice.actions