import {useTypedDispatch} from "./typedHooks";
import {bindActionCreators} from "redux";
import * as productActions from "../redux/actions/productActions";

export const useActions = () => {
    const dispatch = useTypedDispatch();
    return bindActionCreators({
        ...productActions
        }, dispatch)
}