import productReducer, {
    productsError,
    productsSuccess,
    productsLoading,
    updateFavorite,
    updateCart,
    ProductState
} from '../slices/productSlice'
import {IProduct} from "../../types/product";

const initialState: ProductState = {
    products: [],
    cart: [],
    favorite: [],
    loading: false,
    error: null
}

const products: IProduct [] = [
    {
        id: 0,
        category: 'woman clothes',
        description: 'description',
        image: 'image',
        price: 320,
        rating: {
            count: 10,
            rate: 3,
        },
        title: 'Hat'
    },

    {
        id: 1,
        category: 'man clothes',
        description: 'description',
        image: 'image',
        price: 120,
        rating: {
            count: 20,
            rate: 1,
        },
        title: 'Cap'
    },
]

describe('Product Slice Tests', ()=>{
    test('Default state on empty type', ()=>{
        const result = productReducer(undefined, {type: ''})

        expect(result).toEqual(initialState)
    })

    test('Should change loading state to true on Loading and to False on Success', ()=>{
        const actionLoading = {type: productsLoading.type}
        const actionSuccess = {type: productsSuccess.type, payload: products}

        const firstResult = productReducer(initialState, actionLoading)
        expect(firstResult.loading).toEqual(true)

        const secondResult = productReducer(firstResult, actionSuccess)
        expect(secondResult.loading).toEqual(false)
    })

    test('Should put correct number of products on Success', ()=>{
        const actionSuccess = {type: productsSuccess.type, payload: products}

        const result = productReducer(initialState, actionSuccess)
        expect(result.products.length).toEqual(2)
    })

    test('Should content correct error text on error action', ()=>{
        const actionError = {type: productsError.type, payload: 'Error text'}

        const result = productReducer(initialState, actionError)
        expect(result.loading).toEqual(false)
        expect(result.error).toEqual('Error text')
    })

    test('Should content correct favorite list on update action', ()=>{
        const actionFavourite = {type: updateFavorite.type, payload: [1,2,3]}

        const result = productReducer(initialState, actionFavourite)
        expect(result.favorite).toEqual([1,2,3])
    })

    test('Should content correct cart list on update action', ()=>{
        const actionCart = {type: updateCart.type, payload: [4,5,6]}

        const result = productReducer(initialState, actionCart)
        expect(result.cart).toEqual([4,5,6])
    })

})