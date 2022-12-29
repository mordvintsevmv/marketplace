import {createSlice} from "@reduxjs/toolkit";

interface ProductState {
    loading: boolean,
    error: null | string
}

const initialState: ProductState = {
    loading: false,
    error: null
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{}
})