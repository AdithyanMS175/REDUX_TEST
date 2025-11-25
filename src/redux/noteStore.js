import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slices/noteSlice";

const noteStore = configureStore({
    reducer:{
        noteReducer:noteSlice
    }
})

export default noteStore