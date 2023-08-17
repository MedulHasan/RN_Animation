export const mutation = (URL, method, data = {}, access_token = "") => {
    const instance = data instanceof FormData;
    const body = instance ? data : JSON.stringify(data);
    const contentType = instance ? "multipart/form-data" : "application/json";
    return fetch(URL, {
        method: method,
        headers: {
            "content-type": contentType,
            Accept: "application/json",
            Authorization: `Bearer ${access_token}`,
        },
        body: body,
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => {});
};

export const query = (URL, method = "GET", access_token = "") => {
    return fetch(URL, {
        method,
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${access_token}`,
        },
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => {});
};
