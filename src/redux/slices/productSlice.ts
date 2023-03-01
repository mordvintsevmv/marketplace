import {createSlice} from "@reduxjs/toolkit";
import {IProduct} from "../../types/product";

interface ProductState {
    products: IProduct[],
    cart: number[],
    favorite: number[],
    loading: boolean,
    error: null | string
}

const initialState: ProductState = {
    products: [],
    cart: [],
    favorite: [],
    loading: false,
    error: null
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsLoading: (state) => {
            state.loading = true;
        },

        productsSuccess: (state, action) => {
            state.products = action.payload;
            state.loading = false;
        },

        productsError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        setCart: (state, action) => {
            state.cart = action.payload
        },

        setFavorite: (state, action) => {
            state.favorite = action.payload
        }

    }
})

export default productSlice.reducer