import { logout } from "../redux/features/auth/signin/signinSlice";

const resetReduxStore = (dispatch) => {
    dispatch(logout());
};

export default resetReduxStore;
