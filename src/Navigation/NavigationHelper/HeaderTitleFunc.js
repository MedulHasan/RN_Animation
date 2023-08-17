import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { HOME, MY_ACCOUNT, MY_WALLET, ORDER_LIST } from '../screensName';
import useLangTranslation from '../../hooks/useLangTranslation';

const HeaderTitleFunc = route => {
    const {trans} = useLangTranslation();
    const routeName = getFocusedRouteNameFromRoute(route) ?? HOME;
    switch (routeName) {
        case HOME:
            return trans('Home');
        case ORDER_LIST:
            return trans('Order List');
        case MY_WALLET:
            return trans('My Wallet');
        case MY_ACCOUNT:
            return trans('My Account');
        default:
            return routeName;
    }
};

export default HeaderTitleFunc;
