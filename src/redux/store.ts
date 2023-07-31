import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/src/redux/modules/auth/authSlice";
import collapseReducer from "@/src/redux/modules/menu/collapseSlice";
export const store = configureStore({
    reducer:{
        authReducer,
        collapseReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;