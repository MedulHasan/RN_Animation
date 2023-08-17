export const dateCount = [];
for (let i = 1; i <= 31; i++) {
    dateCount.push({ name: i.toString() });
}
export const monthCount = [
    { name: "" },
    { name: "January" },
    { name: "February" },
    { name: "March" },
    { name: "April" },
    { name: "May" },
    { name: "June" },
    { name: "July" },
    { name: "August" },
    { name: "September" },
    { name: "October" },
    { name: "November" },
    { name: "December" },
];
export const convertMonth = (value) => {
    return monthCount[parseInt(value)].name;
};

export const yearCount = [];
for (let i = new Date().getFullYear(); i > 1900; i--) {
    yearCount.push({ name: i.toString() });
}

export const editFormValidation = (updateData, trans) => {
    let phoneReg = /^[+]?[0-9]{1,15}$/;
    const error = {};
    if (updateData.firstName === "") {
        error.name = true;
    }

    if (!updateData.gender) {
        error.gender = true;
    }

    if (updateData.phone && phoneReg.test(updateData.phone) === false) {
        error.phone = trans("Phone number max 15 char long");
    }

    return error;
};

export const confirmGender = (value, setGender) => {
    if (value === "Male") {
        setGender({
            male: value,
            female: "",
        });
    } else {
        setGender({
            male: "",
            female: value,
        });
    }
};

export const appendFormData = (updateData) => {
    let month =
        typeof updateData.month === "number"
            ? updateData.month
            : monthCount.findIndex((item) => item?.name == updateData.month);
    let formData = new FormData();
    let birthday =
        updateData.year && updateData.month && updateData.day
            ? `${updateData.year}/${month}/${updateData.day}`
            : "";
    formData.append("name", `${updateData.firstName} ${updateData.lastName}`);
    formData.append("email", updateData.email);
    formData.append("gender", updateData.gender);
    formData.append("phone", updateData.phone);
    formData.append("birthday", birthday);
    formData.append("address", updateData.address);
    formData.append("image", updateData.attachment);
    return formData;
};
