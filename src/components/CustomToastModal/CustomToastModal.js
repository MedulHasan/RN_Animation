import { View, Text, Modal } from "react-native";
import styles from "./CustomToastModalStyles";
import { useEffect } from "react";

const CustomToastModal = ({ content, isVisible, setIsVisible }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!isVisible) {
        return null;
    }
    return (
        <Modal animationType='fadeIn' transparent={true} visible={isVisible}>
            <View style={styles.centeredView}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textStyle}>{content}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CustomToastModal;
