let regEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const formValidation = ({ value, passwordPreferences, trans }) => {
    let error = {};
    if (!value.name) {
        error.name = trans("Your name is required");
    } else if (value.name > 192) {
        error.name = trans("Name is too large");
    } else if (value.name.length < 3) {
        error.name = trans("Name should be at least 3 characters.");
    }

    if (!value.email) {
        error.email = trans("Email is required");
    } else if (regEmail.test(value.email) === false) {
        error.email = trans("Enter a valid email address");
    }

    const err = passwordValidation(value, passwordPreferences, trans);
    return { ...error, ...err };
};

export function passwordValidation(value, passwordPreferences, trans) {
    const checkRegex = (v) => {
        const r = new RegExp(v);
        return r.test(value.password);
    };
    let regPassword = "^";
    let passwordError = '';
    for (let preference in passwordPreferences) {
        if (preference == "lowercase" && passwordPreferences[preference]) {
            regPassword = regPassword + `(?=.*[a-z])`;
            passwordError = passwordError + `lowercase `;
        }
        if (preference == "uppercase" && passwordPreferences[preference]) {
            regPassword = regPassword + `(?=.*[A-Z])`;
            passwordError = passwordError + `uppercase `;
        }
        if (preference == "number" && passwordPreferences[preference]) {
            regPassword = regPassword + `(?=.*[0-9])`;
            passwordError = passwordError + `numbers `;
        }
        if (preference == "symbol" && passwordPreferences[preference]) {
            regPassword = regPassword + `(?=.*[!@#$%^&*()_+=-?<>{}~])`;
            passwordError = passwordError + `symbols `;
        }
    }
    let str = passwordError.split(' ').slice(0, -1).join(', ');
    let lastCommaIndex = str.lastIndexOf(",");
    if (lastCommaIndex !== -1) {
        let beforeComma = str.substring(0, lastCommaIndex);
        let afterComma = str.substring(lastCommaIndex + 1);
        str = 'with ' + beforeComma + " and" + afterComma;
    } else if(lastCommaIndex == -1) {
        str = str ? `with ${str}`  : str
    }
    passwordError = str;
    const error = {};
    if (!value.password) {
        error.password = trans("Password is required");
    } else if (
        checkRegex(regPassword + `\\S{${passwordPreferences?.length},}$`) ===
        false
    ) {
        error.password = trans("Password must contain {{z}} characters long {{x}}", {x: passwordError, z: passwordPreferences?.length});
    }
    return error;
}
