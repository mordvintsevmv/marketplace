import {useTypedDispatch} from "./typedHooks";
import {bindActionCreators} from "redux";
import * as productActions from "../redux/actions/productActions";
import * as themeActions from "../redux/actions/themeActions";

export const useActions = () => {
    const dispatch = useTypedDispatch();
    return bindActionCreators({
        ...productActions,
        ...themeActions
    }, dispatch)
}