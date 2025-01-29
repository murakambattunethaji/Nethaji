import { createSlice } from "@reduxjs/toolkit";

const cartmanagement = createSlice({
    name:"cartmanagement",
    initialState:["cart 1","cart 2","cart 3"],
    reducers:{}
})

const moviebooking = createSlice({
    name:"moviebooking",
    initialState:["seat 1","seat 2","seat 3"],
    reducers:{}
})

const ecommerce = createSlice({
    name:"ecommerce",
    initialState:["cart 1","cart 2","cart 3"],
    reducers:{}
})

const socialmedia = createSlice({
    name:"socialmedia",
    initialState:["instagram","facebook","twitter"],
    reducers:{}
})

const expancetracker = createSlice({
    name:"expancetracker",
    initialState:["track 1","track 2","track 3",],
    reducers:{}
})

export const cartreducer= cartmanagement.reducer
export const moviereducer= moviebooking.reducer
export const ecommercereduser= ecommerce.reducer
export const socialmediareduse = socialmedia.reducer
export const expancetrackerreduser = expancetracker.reducer

