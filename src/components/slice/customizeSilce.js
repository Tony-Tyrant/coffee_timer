import { createSlice } from "@reduxjs/toolkit";

export const customizeSlice = createSlice({
    name: "customize",
    initialState: {
        volume: 250,
        volumeDefault: 250,
        powderRatio: 15,
        powderRatioDefault: 15,
        pour: 5,
        pourDefault: 5,
        totalTime: 150,
        totalTimeDefault: 150,
        firstPour: 40,
        firstPourDefault: 40,
        confirmed: false, 
    },
    reducers: {
        updateVolume: (state) => {
            state.volume = Number(document.getElementById("volume").value);
        },

        updatePowderRatio: (state) => {
            state.powderRatio = Number(document.getElementById("powderRatio").value);
        },

        updatePour: (state) => {
            state.pour = Number(document.querySelector('input[name="pour"]:checked').value);
        },

        updateFirstPour: (state) => {
            state.firstPour = Number(document.querySelector('input[name="firstPour"]:checked').value);
        },

        updateTotalTime: (state) => {
            state.totalTime = Number(document.getElementById("totalTime").value);
        },

        updateConfirm: (state) => {
            state.confirmed = !state.confirmed;
        },

        reset: (state) => {
            state.volume = state.volumeDefault;
            state.powderRatio = state.powderRatioDefault;
            state.pour = state.pourDefault;
            state.firstPour = state.firstPourDefault;
            state.totalTime = state.totalTimeDefault;
            state.confirmed = false;
        },
    }
})

export const { updateVolume, updatePowderRatio, updatePour, updateFirstPour, updateTotalTime, updateConfirm, reset } = customizeSlice.actions;
export default customizeSlice.reducer;