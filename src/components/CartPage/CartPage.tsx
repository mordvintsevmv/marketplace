import React, {FC} from "react";
import {useTypedSelector} from "../../hooks/typedHooks";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../Header/Header";
import './CartPage.scss'
import Button from '@mui/material/Button';
import {Stack, Typography} from "@mui/material";

const CartPage: FC = () => {
    const {cart, products} = useTypedSelector(state => state.productReducer)

    let cartCards: Array<React.ReactNode>
    let sum = 0

    if (cart.length !== 0 && products.length !== 0){
        cartCards = cart.map(favID => {
            const productID = products.findIndex(product => product.id === favID)
            const product = products[productID]
            sum += product.price
            return (<ProductCard product={product} key={product.id}/>)
        })
    } else {
        cartCards = []
    }

    return (
        <div className={"cart-page"}>
            <Header title={"Cart Items"}/>

            <div className={"cards-adaptive cart-page__cards"}>
                {cartCards}
            </div>

            <Stack direction={'row'} spacing={2} justifyContent="center" alignItems="center">
                <Button variant="contained" disabled>
                    Order
                </Button>

                <Typography variant={'h3'} color={'secondary'}>
                    ${sum}
                </Typography>
            </Stack>




        </div>
    )

}

export default CartPage