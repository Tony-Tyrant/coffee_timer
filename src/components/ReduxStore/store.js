import { configureStore } from "@reduxjs/toolkit";
import customizeReducer from "../slice/customizeSilce";
import timerSilce from "../slice/timerSilce";

export default configureStore({
    reducer: {
        customize: customizeReducer,
        timer: timerSilce,
    },
})