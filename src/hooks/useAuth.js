import { useSelector } from "react-redux";
import { signinSelector } from "../redux/features/auth/signin/signinSelector";

const useAuth = () => {
    const auth = useSelector(signinSelector);

    return {
        access_token: auth?.access_token,
        user: auth?.user,
    };
};

export default useAuth;
