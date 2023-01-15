import React, {FC, useCallback, useEffect, useState} from "react";
import IconButton from "@mui/material/IconButton";
import {ShoppingCart} from "@mui/icons-material";

interface CartButtonProps {
    productID: number
}

const CartButton: FC<CartButtonProps> = ({productID}) => {

    const [cartFlag, setCartFlag] = useState(false)

    const checkInCart = useCallback(
        () => {
            let cart = localStorage.getItem("cart")
            if (cart !== null) {
                let cartArr = cart.split(",");
                if (cartArr.includes(String(productID))) {
                    setCartFlag(true)
                } else {
                    setCartFlag(false)
                }
            }
        }, []
    )

    const CartHandler = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            let cart = localStorage.getItem("cart")

            if (cart !== null) {
                let cartArr = cart.split(",");

                if (cartArr.includes(String(productID))) {
                    cartArr = cartArr.filter((id) => {
                        return id !== String(productID)
                    })
                    localStorage.setItem("cart", cartArr.toString())
                } else {
                    localStorage.setItem("cart", String(cart + "," + String(productID)))
                }
            } else {
                localStorage.setItem("cart", String(cart + "," + String(productID)))
            }

            checkInCart();

        }, []
    )

    useEffect(() => {
        checkInCart();
    }, [])

    return (
        <span onClick={CartHandler}>
            <IconButton aria-label={"Add to cart"} color={cartFlag ? "secondary" : "primary"}>
                <ShoppingCart/>
            </IconButton>
        </span>
    )
}

export default CartButton