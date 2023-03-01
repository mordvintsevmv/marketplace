import React, {FC} from "react";
import {useTypedSelector} from "../../hooks/typedHooks";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../Header/Header";

const CartPage: FC = () => {
    const {cart, products} = useTypedSelector(state => state.productReducer)

    let cartCards: Array<React.ReactNode>

    products.length !== 0 ? cartCards = cart.map(cartID => {
        const productID = products.findIndex(product => product.id === cartID)
        const product = products[productID]
        return (<ProductCard product={product} key={product.id}/>)
    }) : cartCards = []

    return (
        <div className={"cart-page"}>
            <Header title={"Cart Items"}/>

            <div className={"cards-adaptive"}>
                {cartCards}
            </div>
        </div>
    )

}

export default CartPage