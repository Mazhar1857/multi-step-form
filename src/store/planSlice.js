import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name: 'plan',
    initialState: {
        plan: null,
        planCycle: 'monthly'
    },
    reducers: {
        setPlan: (state, action) => {
            state.plan = action.payload
        },
        setplanCycle: (state) => {
            state.planCycle = state.planCycle === 'monthly' ? 'yearly' : 'monthly';
        }
    }

})

export default planSlice;
export const planAction = planSlice.actions;



