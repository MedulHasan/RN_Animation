const { createSlice } = require("@reduxjs/toolkit");
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    reCaptchaToken: false,
    access_token: null,
    user: null,
};

const signinSlice = createSlice({
    name: 'auth/signin',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.access_token = payload.access_token;
            state.user = payload.user;
            state.loading = false;
            AsyncStorage.setItem("isLoggedIn", JSON.stringify(payload));
        },
        logout: (state) => {
            state.access_token = null;
            state.user = null;
            state.reCaptchaToken = false;
            state.loading = false;
            AsyncStorage.removeItem("isLoggedIn");
        },
        storeRecaptchaToken: (state, { payload }) => {
            state.reCaptchaToken = payload;
        },
    }
});

export const {login, logout, storeRecaptchaToken} = signinSlice.actions;
export default signinSlice.reducer;