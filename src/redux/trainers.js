import { createSlice } from "@reduxjs/toolkit";


const trainersSlice = createSlice({
    name: "trainers",
    initialState: [],
    reducers: {
        setTrainers: (state, action) => {
            return action.payload;
        },
        addTrainer: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { setTrainers, addTrainer } = trainersSlice.actions;
export default trainersSlice.reducer;