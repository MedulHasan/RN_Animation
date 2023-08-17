import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_API_URL_STG } from "@env";
import { query } from "../../redux/features/util/apiRequest";
import { mutationResponse } from "../../redux/features/util/processResponse.js";

export const signInUsingGoogle = async (response) => {
    try {
        const URL = "https://www.googleapis.com/userinfo/v2/me";
        const data = await query(
            URL,
            "GET",
            response.authentication.accessToken
        );

        const { name, email, id, picture } = data;
        const uData = await createData({
            name,
            email,
            id,
            picture,
            service: "google",
        });

        return uData;
    } catch (err) {}
};
export const signInUsingFacebook = async (responseFB) => {
    try {
        const URL = `https://graph.facebook.com/me?access_token=${responseFB.authentication.accessToken}&fields=id,name,email,picture`;
        const res = await fetch(URL);
        const data = await res.json();
        const {
            name,
            email,
            id,
            picture: {
                data: { url },
            },
        } = data;
        const uData = createData({
            name,
            email,
            id,
            picture: url,
            service: "facebook",
        });
        return uData;
    } catch (e) {}
};

export const passwordGenarator = () => {
    const number = Math.floor(Math.random() * 1000);
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const symbol = "!@#$%&*";

    return `${randomValue(uppercase)}${randomValue(
        symbol
    )}${number}${randomValue(lowercase)}`;
};

const randomValue = (input) => {
    let x = "";
    for (let i = 0; i < 3; i++) {
        x = x + input.charAt(Math.floor(Math.random() * input.length));
    }
    return x;
};

export const createData = async (data) => {
    const password = passwordGenarator();
    const userInfo = {
        name: data.name,
        email: data.email,
        password,
        password_confirmation: password,
        status: "Active",
        id: data.id,
        avatar: data.picture,
        service: data.service,
    };
    const uInfo = await fetchApi(userInfo);
    return uInfo;
};

export const fetchApi = async (userInfo) => {
    const URL = `${BASE_API_URL_STG}/user/login/sso`;
    const data = await mutationResponse(URL, "POST", userInfo);
    return data;
};

export const storeUserInfoInSecureStore = async (records) => {
    try {
        await AsyncStorage.setItem("isLoggedIn", JSON.stringify(records));
        return true;
    } catch (err) {}
};
