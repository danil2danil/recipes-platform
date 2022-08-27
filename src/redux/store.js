import { configureStore } from "@reduxjs/toolkit";
import userReduser from './userSlise'

export const store = configureStore({
    reducer:{
        user: userReduser,
    }
})