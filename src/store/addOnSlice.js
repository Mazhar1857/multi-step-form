import { createSlice } from "@reduxjs/toolkit";

const addOnSlice = createSlice({
    name: 'addOn',
    initialState: [],
    reducers: {
        setAddOn: (state, action) => {
            return state.includes(action.payload) ? state.filter((item) => item !== action.payload) : [...state, action.payload]
        }
    }
})

export default addOnSlice;
export const addOnaction = addOnSlice.actions;