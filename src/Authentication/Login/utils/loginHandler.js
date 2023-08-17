import { storeUserInfoInSecureStore } from "../ssoFunctions";

export const loginHandler = async (data, setFormError) => {
    const { message, code } = data?.status || {};
    const records = data?.records;
    if (message == "OK") {
        const value = await storeUserInfoInSecureStore(records);
        return value;
    } else if (code === 422) {
        setFormError({
            ["authError"]: records?.message,
        });
    } else {
        setFormError({
            ["authError"]: "Email/password is incorrect",
        });
    }
};
