import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL_STG} from "@env";
import { logout } from "../auth/signin/signinSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_API_URL_STG,
    prepareHeaders: (headers, {getState}) => {
        const access_token = getState()?.signin?.access_token
        if(access_token) {
            headers.set("Authorization", `Bearer ${access_token}`)
        };
        return headers;
    }
})

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);
        const {code, message} = result?.error?.data?.response?.status || {};
        if (code == 401 && message == "Unauthorized") {
            api.dispatch(logout());
            return {data: result?.error?.data, meta: result?.error?.meta};
        }
        return result;
    },
    tagTypes: ["profileInfo"],
    endpoints: (builder) => ({})
})