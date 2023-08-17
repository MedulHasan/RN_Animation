import Toast from "react-native-toast-message";

const useCustomToast = () => {
	const showToast = ({ 
        text1,
        position='bottom',
        bottomOffset=20,
        ...args
    }) => {
		Toast.show({
			text1,
            position,
            bottomOffset,
			...args,
		});
	};
	return showToast;
};

export default useCustomToast;
