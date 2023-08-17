const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    reCaptchaToken: false,
    captchaToken: "",
    data: {},
};

const signupSlice = createSlice({
    name: 'auth/signup',
    initialState,
    reducers: {
        storeUserinfo: (state, {payload}) => {
            state.data = payload;
        },
        storeRecaptchaToken: (state, { payload }) => {
            state.reCaptchaToken = payload;
        },
        storeCaptchaToken: (state, { payload }) => {
            state.captchaToken = payload;
        },
    }
});

export const {
    storeUserinfo,
    storeCaptchaToken,
    storeRecaptchaToken
} = signupSlice.actions;
export default signupSlice.reducer;