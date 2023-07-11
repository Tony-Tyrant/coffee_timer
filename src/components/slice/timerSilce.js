import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
    name: "timer",
    initialState: {
        count: 0,
    },
    reducers: {
        updateCount: (state) =>  {
            state.count += 1;
        },
        resetCount: (state) =>  {
            state.count = 0;
        },
    }
})

export const { updateCount, resetCount } = timerSlice.actions;
export default timerSlice.reducer;