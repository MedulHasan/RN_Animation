import { login } from "./signinSlice";

const { apiSlice } = require("../../api/apiSlice");

const signinApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (data) => ({
                url: `/user/login`,
                method: 'POST',
                body: data
            }),
            transformResponse: (res) => {
                const response = res?.response;
                return response;
            },
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                const {data} = await queryFulfilled;
                dispatch(login(data?.records));
            }
        })
    })
});

export const {useSigninMutation} = signinApi;