const { apiSlice } = require("../../api/apiSlice");
const { storeRecaptchaData } = require("./recaptchaSlice");

const recaptchaApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        recaptcha: builder.query({
            query: () => ({
                url: `/user/addon-activity?name=Recaptcha`
            }),
            transformResponse: (res) => {
                const response = res?.response;
                return response;
            },
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                const {data} = await queryFulfilled;
                dispatch(storeRecaptchaData(data))
            }
        })
    })
});

export const {useLazyRecaptchaQuery} = recaptchaApi;