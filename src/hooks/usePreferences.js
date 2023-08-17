import { useSelector } from "react-redux";
import { preferenceSelector } from "../redux/features/preferences/preferenceSelector";

const usePreferences = () => {
    const {allPreferences} = useSelector(preferenceSelector);
    const {
        preference,
        company,
        product_inventory,
        product_general,
        verification,
        password,
    } = allPreferences || {};
    return {
        preference,
        company,
        product_inventory,
        product_general,
        verification,
        password,
    };
};

export default usePreferences;
