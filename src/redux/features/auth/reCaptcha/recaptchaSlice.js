const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isVisibleRecaptcha: false,
};

const getReCaptchaVisibility = createSlice({
    name: 'recaptcha',
    initialState,
    reducers: {
        storeRecaptchaData: (state, {payload}) => {
            const { status, records } = payload || {};
            if (status?.code === 200) {
                state.isVisibleRecaptcha = records?.data;
            }
        }
    }
});

export const {storeRecaptchaData} = getReCaptchaVisibility.actions;
export default getReCaptchaVisibility.reducer;