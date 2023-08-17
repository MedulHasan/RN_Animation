import AsyncStorage from '@react-native-async-storage/async-storage';

export const appFirstLaunch = async () => {
    try {
        let firstLaunch = await AsyncStorage.getItem("alreadyLaunched");
        if (firstLaunch === null) {
            await AsyncStorage.setItem("alreadyLaunched", "true");
            return true;
        } else {
            return false;
        }
    } catch (err) {}
};
