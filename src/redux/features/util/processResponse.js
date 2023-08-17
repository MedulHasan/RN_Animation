import { mutation, query } from "./apiRequest";

export const queryResponse = async (URL, method = "GET", access_token) => {
    const data = await query(URL, method, access_token);
    return data?.response;
};

export const mutationResponse = async (
    URL,
    method,
    inputData,
    access_token
) => {
    const data = await mutation(URL, method, inputData, access_token);
    return data?.response;
};
