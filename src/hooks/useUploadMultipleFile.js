import DocumentPicker from "react-native-document-picker";
import useCustomToast from "./useCustomToast";
import usePreferences from "./usePreferences";
import useLangTranslation from "./useLangTranslation";

const useUploadMultipleFile = () => {
    const {trans} = useLangTranslation();
    const { preference: { file_size } = {} } = usePreferences();
    const showToast = useCustomToast();
    const uploadMultipleFile = async () => {
        let results = [];
        try {
            let result = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.images],
            });
            for (let item of result) {
                const fileSize = item?.size / (1024 * 1024);
                if (fileSize > Number(file_size)) {
                    showToast({
                        text1: trans("Image size must be less then {{x}} mb", {x: file_size}),
                        type: "common",
                        position: "bottom",
                        props: { variant: "error" },
                    });
                    return;
                } else {
                    results = [...results, item];
                }
            }
            return results;
        } catch (err) {
            return false;
        }
    };
    return uploadMultipleFile;
};

export default useUploadMultipleFile;
