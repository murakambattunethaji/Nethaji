import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    users: []
}

export const getuserfromserver = createAsyncThunk('users/getuserfromserver', async () => {
    const response = await (await fetch("http://localhost:4200/nethaji")).json()
    return response
})

export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createuser: () => { },
        readuser: () => { },
        updateuser: () => { },
        deleteuser: () => { },
    },
    extraReducers: (builder) => {
        builder.addCase(getuserfromserver.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(getuserfromserver.rejected, (state, action) => {
            console.log("some error")
            state.action = []
        })

    }
})

export default UserSlice.reducer