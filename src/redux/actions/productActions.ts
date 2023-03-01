import {Dispatch} from "@reduxjs/toolkit";
import {productSlice} from "../slices/productSlice";
import axios from "axios";

const {productsSuccess, productsError, productsLoading, updateCart, updateFavorite} = productSlice.actions

export const fetchProducts = () => async (dispatch: Dispatch) => {

    try {
        dispatch(productsLoading())
        await axios.get("https://fakestoreapi.com/products/")
            .then(response => dispatch(productsSuccess(response.data)))
    } catch (e) {
        dispatch(productsError(e))
    }
}

export const setCart = (cart: number[]) => (dispatch: Dispatch) => {
    localStorage.setItem('cart', cart.toString())

    let cartList = localStorage.getItem('cart')?.split(",").map(Number) || []
    dispatch(updateCart(cartList))

}

export const setFavourite = (favorite: number[]) => (dispatch: Dispatch) => {
    localStorage.setItem('favorite', favorite.toString())

    let favoriteList = localStorage.getItem('favorite')?.split(",").map(Number) || []
    dispatch(updateFavorite(favoriteList))
}

export const fetchLists = () => (dispatch: Dispatch) => {

    let favoriteList = localStorage.getItem('favorite')?.split(",").map(Number) || []
    dispatch(updateFavorite(favoriteList))

    let cartList = localStorage.getItem('cart')?.split(",").map(Number) || []
    dispatch(updateCart(cartList))


}