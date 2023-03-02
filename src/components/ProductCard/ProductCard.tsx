import React, {FC} from "react";
import {IProduct} from "../../types/product";
import "./ProductCard.scss"
import {NavLink} from "react-router-dom";
import {Stack} from "@mui/material"
import CartButton from "../Buttons/CartButton";
import FavoriteButton from "../Buttons/FavoriteButton";
import {useTypedSelector} from "../../hooks/typedHooks";

interface ProductCardProps {
    product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({product}) => {

    const theme = useTypedSelector(state => state.themeReducer)

    return (

        <div className={`product-card product-card-${theme}`}>

            <NavLink to={"/products/" + product.id}>

                <div className={"product-card__image"}>
                    <img src={product.image} alt={product.title}/>
                </div>

                <div className={"product-card__title"}>
                    <h4>{product.title}</h4>
                </div>

            </NavLink>


            <div className={"product-card__category"}>
                <NavLink to={`/categories/${product.category}`}>
                    {product.category}
                </NavLink>

            </div>

            <Stack direction={"row"}>

                <CartButton productID={product.id}/>

                <FavoriteButton productID={product.id}/>

            </Stack>

            <div className={"product-card__price"}>
                <h3>${product.price}</h3>
            </div>

        </div>

    )
}

export default ProductCard