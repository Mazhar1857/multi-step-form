import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState: 1,
    reducers: {
        next: (state, action) => {
            return action.payload
        },
        previous: (state) => {
            if (state > 1) {
                return state - 1;
            }
        }

    }
})

export default currentPageSlice;
export const currentPageAction = currentPageSlice.actions;