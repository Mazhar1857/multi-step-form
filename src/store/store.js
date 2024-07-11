import { configureStore } from "@reduxjs/toolkit";
import personalInfoSlice from "./personalInfoSlice";
import currentPageSlice from "./currentPageSlice";
import planSlice from "./planSlice";
import addOnSlice from "./addOnSlice";

const store = configureStore(
    {
        reducer: {
            personalInfo: personalInfoSlice.reducer,
            currentPage: currentPageSlice.reducer,
            plan: planSlice.reducer,
            addOn: addOnSlice.reducer
        }
    }
)

export default store;