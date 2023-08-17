const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    allPreferences: null,
};

const preferenceSlice = createSlice({
    name: 'preference',
    initialState,
    reducers: {
        setPreferences: (state, {payload}) => {
            state.allPreferences = payload
        }
    }
});

export const {setPreferences} = preferenceSlice.actions;
export default preferenceSlice.reducer;