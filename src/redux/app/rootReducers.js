import { apiSlice } from "../features/api/apiSlice";
import networkReducer from "../features/network/network";
import languageReducer from "../features/language/language";
import signinReducer from "../features/auth/signin/signinSlice";
import signupSlice from "../features/auth/signup/signupSlice";
import preferenceSlice from "../features/preferences/preferenceSlice";
import recaptchaReducer from "../features/auth/reCaptcha/recaptchaSlice"

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    networkReducer,
    languageReducer,
    preference: preferenceSlice,
    signin: signinReducer,
    signup: signupSlice,
    recaptcha: recaptchaReducer
});

export default rootReducers;