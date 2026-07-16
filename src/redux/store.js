import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './theme.js';
import trainersReducer from './trainers.js';

const myStore = configureStore({
    reducer: {
        theme: themeReducer,
        trainers: trainersReducer,
    },
});

export default myStore;