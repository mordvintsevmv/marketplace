import React, {FC, useEffect, useState} from "react";
import IconButton from "@mui/material/IconButton";
import {ShoppingCart} from "@mui/icons-material";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/actions";

interface CartButtonProps {
    productID: number
}

const CartButton: FC<CartButtonProps> = ({productID}) => {

    const [cartFlag, setCartFlag] = useState(false)
    const {cart} = useTypedSelector(state => state.productReducer)
    const {setCart} = useActions()

    const checkInCart = () => {
        if (cart.includes(productID)) {
            setCartFlag(true)
        } else {
            setCartFlag(false)
        }
    }

    const CartHandler = () => {
        let cartList = [...cart]

        if (cartFlag){
            cartList = cartList.filter(id => id !== productID)
        } else {
            cartList.push(productID)
        }

        setCart(cartList)
    }

    useEffect(() => {
        checkInCart();
    }, [cart])

    return (
        <span onClick={CartHandler}>
            <IconButton aria-label={"Add to cart"} color={cartFlag ? "secondary" : "primary"}>
                <ShoppingCart/>
            </IconButton>
        </span>
    )
}

export default CartButton