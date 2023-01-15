import {createSlice} from "@reduxjs/toolkit";
import {IProduct} from "../../types/product";

interface ProductState {
    products: IProduct[],
    loading: boolean,
    error: null | string
}

const initialState: ProductState = {
    products: [],
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
        }

    }
})

export default productSlice.reducer