import { apiSlice } from "../api/apiSlice";
import { setPreferences } from "./preferenceSlice";

const preferenceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPreference: builder.query({
            query: () => '/preferences',
            transformResponse: (response) => {
                const {records: { data } = {}, status} = response?.response || {};
                return {...data, status};
            },
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                const {data} = await queryFulfilled;
                dispatch(setPreferences(data));
            }
        })
    })
});

export const {useGetPreferenceQuery, useLazyGetPreferenceQuery} = preferenceApi;