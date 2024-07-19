import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from './UsersSlice'

export const Store = configureStore({
    reducer: {
        usersstate:UserSlice
    },
})
