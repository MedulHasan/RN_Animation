let regEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const loginFormValidation = (value, trans) => {
    let error = {};

    if (!value.email) {
        error.email = trans("Email is required");
    } else if (regEmail.test(value.email) === false) {
        error.email = trans("Enter a valid email address");
    }

    if (!value.password) {
        error.password = trans("Password is required");
    }

    return error;
};
