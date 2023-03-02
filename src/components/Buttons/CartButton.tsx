import React, {FC, useEffect, useState} from "react";
import IconButton from "@mui/material/IconButton";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/actions";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

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

        if (cartFlag) {
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
            <IconButton aria-label={"Add to cart"}>
                {cartFlag ? <ShoppingBasketIcon color={'secondary'}/> : <ShoppingBasketOutlinedIcon/>}
            </IconButton>
        </span>
    )
}

export default CartButton