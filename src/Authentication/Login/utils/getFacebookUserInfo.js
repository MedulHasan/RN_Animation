import { login } from "../../../redux/slices/auth/signIn";
import { signInUsingFacebook } from "../ssoFunctions";
import { loginHandler } from "./loginHandler";

export const getFacebookUserInfo = async (
    responseFB,
    setFormError,
    dispatch
) => {
    setFormError({});
    const res = await signInUsingFacebook(responseFB);
    const { access_token, user } = res?.records || {};
    if (access_token) {
        dispatch(
            login({
                access_token: access_token,
                user: user,
            })
        );
        const data = loginHandler(res, setFormError);
        return { data, access_token };
    }
};
