import React, {FC, useEffect, useState} from "react";
import IconButton from "@mui/material/IconButton";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/actions";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Button} from "@mui/material";

interface CartButtonProps {
    productID: number,
    type?: string
}

const CartButton: FC<CartButtonProps> = ({productID, type = 'icon'}) => {

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

    if (type === 'button'){
        return (
            <span onClick={CartHandler}>
                <Button variant="outlined" startIcon={<ShoppingBasketIcon/>} color={cartFlag ? 'secondary' : 'primary'}>
                    {cartFlag ? 'remove from cart' : 'add to cart'}
                </Button>
        </span>)
    } else {
        return (
            <span onClick={CartHandler}>
            <IconButton aria-label={"Add to cart"}>
                {cartFlag ? <ShoppingBasketIcon color={'secondary'}/> : <ShoppingBasketOutlinedIcon/>}
            </IconButton>
        </span>
        )
    }

}

export default CartButton