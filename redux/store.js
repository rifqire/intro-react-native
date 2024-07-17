// 3. Add the reducer to store using configureStore
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataSlice";

export const store = configureStore({
    reducer: {
        list: dataReducer,
    },
})