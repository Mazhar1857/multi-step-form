import { createSlice } from "@reduxjs/toolkit";

const personalInfoSlice = createSlice(
    {
        name: 'personalInfo',
        initialState: {
            'name': { 'value': '', 'status': 'valid' },
            'email': { 'value': '', 'status': 'valid' },
            'phoneNumber': { 'value': '', 'status': 'valid' }
        },
        reducers: {
            setName: (state, action) => {
                state.name = { ...state.name, ...action.payload }
            },
            setEmail: (state, action) => {
                state.email = { ...state.email, ...action.payload }
            },
            setPhoneNumber: (state, action) => {
                state.phoneNumber = { ...state.phoneNumber, ...action.payload }
            }
        }
    }
)

export default personalInfoSlice;
export const personalInfoAction = personalInfoSlice.actions