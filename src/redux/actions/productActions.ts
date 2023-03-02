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

    let cartList = localStorage.getItem('cart')

    if (cartList !== null && cartList !== '') {
        dispatch(updateCart(cartList.split(",").map(Number)))
    } else {
        dispatch(updateCart([]))
    }

}

export const setFavourite = (favorite: number[]) => (dispatch: Dispatch) => {
    localStorage.setItem('favorite', favorite.toString())

    let favoriteList = localStorage.getItem('favorite')

    if (favoriteList !== null && favoriteList !== '') {
        dispatch(updateFavorite(favoriteList.split(",").map(Number)))
    } else {
        dispatch(updateFavorite([]))
    }
}

export const fetchLists = () => (dispatch: Dispatch) => {


    let favoriteList = localStorage.getItem('favorite')

    if (favoriteList !== null && favoriteList !== '') {
        dispatch(updateFavorite(favoriteList.split(",").map(Number)))
    } else {
        dispatch(updateFavorite([]))
    }


    let cartList = localStorage.getItem('cart')

    if (cartList !== null && cartList !== '') {
        dispatch(updateCart(cartList.split(",").map(Number)))
    } else {
        dispatch(updateCart([]))
    }

}