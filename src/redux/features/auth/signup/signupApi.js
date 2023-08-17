import { apiSlice } from "../../api/apiSlice";
import { storeUserinfo } from "./signupSlice";

const signupApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) =>({
                url: "/user/registration",
                method: "POST",
                body: data
            }),
            transformResponse: (res) => {
                const response = res?.response;
                return response;
            },
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                const {data} = await queryFulfilled;
                dispatch(storeUserinfo(data));
            }
        })
    })
});

export const {useSignupMutation} = signupApi;