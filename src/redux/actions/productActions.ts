import {Dispatch} from "@reduxjs/toolkit";
import {productSlice} from "../slices/productSlice";
import axios from "axios";

const {productsSuccess, productsError, productsLoading, setCart, setFavorite} = productSlice.actions

export const fetchProducts = () => async (dispatch: Dispatch) => {
    try {
        dispatch(productsLoading())
        await axios.get("https://fakestoreapi.com/products/")
            .then(response => dispatch(productsSuccess(response.data)))
    } catch (e) {
        dispatch(productsError(e))
    }
}

export const updateCart = (cart: number[]) => (dispatch: Dispatch) => {
    localStorage.setItem('cart', cart.toString())

    const cartList = localStorage.getItem('cart')?.split(",") || []
    dispatch(setCart(cartList))

}

export const updateFavourite = (favorite: number[]) => (dispatch: Dispatch) => {
    localStorage.setItem('favorite', favorite.toString())

    const favouriteList = localStorage.getItem('favorite')?.split(",") || []
    dispatch(setFavorite(favouriteList))
}