import DocumentPicker from "react-native-document-picker";
import useCustomToast from "./useCustomToast";
import usePreferences from "./usePreferences";
import useLangTranslation from "./useLangTranslation";
const useUploadSingleFile = () => {
    const {trans} = useLangTranslation();
    const { preference: { file_size } = {} } = usePreferences();
    const showToast = useCustomToast();
    const uploadSingleFile = async () => {
        try {
            const result = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images],
            });
            const fileSize = result?.size / (1024 * 1024);
            if (fileSize > Number(file_size)) {
                showToast({
                    text1: trans("File size is too large"),
                    type: "common",
                    position: "bottom",
                    props: { variant: "error" },
                });
                return false;
            } else {
                return result;
            }
        } catch (err) {
            return false;
        }
    };
    return uploadSingleFile;
};

export default useUploadSingleFile;
