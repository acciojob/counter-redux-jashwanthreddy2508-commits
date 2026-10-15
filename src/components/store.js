import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Counterslice";

const store = configureStore({
    reducer: {
        count: countReducer
    }
})

export default store
