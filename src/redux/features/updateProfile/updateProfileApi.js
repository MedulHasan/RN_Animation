const { apiSlice } = require("../api/apiSlice");

const updateProfileApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => `/user/profile`,
            transformResponse: (res) => {
                const response = res?.response;
                return response;
            },
            providesTags: ["profileInfo"]
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
                url: `/user/profile/update`,
                method: 'POST',
                body: data,
            }),
            transformResponse: (res) => {
                const response = res?.response;
                return response;
            }
        })
    })
});

export const {useLazyGetProfileQuery, useUpdateProfileMutation, useGetProfileQuery} = updateProfileApi;

