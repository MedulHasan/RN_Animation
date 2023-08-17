import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOnline: null,
    initialInternetCheck: false
};

const networkSlice = createSlice({
    name: "network",
    initialState,
    reducers: {
        setIsOnline: (state, { payload }) => {
            if(!payload) {
                state.initialInternetCheck = true
            }
            state.isOnline = payload;
        },
    },
});

export const { setIsOnline } = networkSlice.actions;
export default networkSlice.reducer;
