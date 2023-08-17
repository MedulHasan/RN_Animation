import { login } from "../../../redux/slices/auth/signIn";
import { signInUsingGoogle } from "../ssoFunctions";
import { loginHandler } from "./loginHandler";

export const getGoogleUserInfo = async (response, setFormError, dispatch) => {
    setFormError({});
    try {
        const res = await signInUsingGoogle(response);
        const { access_token, user } = res?.records || {};
        if (access_token) {
            dispatch(
                login({
                    access_token: access_token,
                    user: user,
                })
            );
            const data = await loginHandler(res, setFormError);
            return { data, access_token };
        }
    } catch (err) {}
};
