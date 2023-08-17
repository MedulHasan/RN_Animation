import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    lng: '',
};

const language = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, { payload }) => {
            state.lng = payload;
            AsyncStorage.setItem('languageCode', payload);
        },
    },
});

export const { setLanguage } = language.actions;
export default language.reducer;
