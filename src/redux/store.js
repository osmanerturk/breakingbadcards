import { configureStore } from "@reduxjs/toolkit";
import bbSlice from "./bbSlice";

export const store= configureStore({
    reducer: {
        bb:bbSlice
    }
})