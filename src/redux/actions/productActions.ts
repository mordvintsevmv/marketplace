import {Dispatch} from "@reduxjs/toolkit";
import {productSlice} from "../slices/productSlice";
import axios from "axios";

const {productsSuccess, productsError, productsLoading} = productSlice.actions

export const fetchProducts = () => async (dispatch: Dispatch) => {
    try{
        console.log("START")
        dispatch(productsLoading())
        await axios.get("https://fakestoreapi.com/products/")
            .then(response => dispatch(productsSuccess(response.data)))
    } catch (e){
        dispatch(productsError(e))
    }
}
