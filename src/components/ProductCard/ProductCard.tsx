import React, {FC, useCallback, useEffect, useState} from "react";
import {IProduct} from "../../types/product";
import "./ProductCard.scss"
import {NavLink} from "react-router-dom";
import {Stack} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import HeartButton from "@mui/icons-material/FavoriteBorderOutlined"
import {ShoppingCart} from "@mui/icons-material";
import people from "../../img/people.svg"
import star from "../../img/star.svg"

interface ProductCardProps {
    product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({product}) => {

    const [favFlag, setFavFlag] = useState(false)
    const [cartFlag, setCartFlag] = useState(false)

    const checkInCart = useCallback(
        () => {
            let cart = localStorage.getItem("cart")
            if (cart !== null) {
                let cartArr = cart.split(",");
                if (cartArr.includes(String(product.id))) {
                    setCartFlag(true)
                } else{
                    setCartFlag(false)
                }
            }
        }, []
    )

    const checkInFav = useCallback(
        () => {
            let fav = localStorage.getItem("favorite")
            if (fav !== null) {
                let favArr = fav.split(",");
                if (favArr.includes(String(product.id))) {
                    setFavFlag(true)
                } else{
                    setFavFlag(false)
                }
            }
        }, []
    )

    const CartHandler = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            let cart = localStorage.getItem("cart")

            if (cart !== null) {
                let cartArr = cart.split(",");

                if (cartArr.includes(String(product.id))) {
                    cartArr = cartArr.filter((id) => {
                        return id !== String(product.id)
                    })
                    localStorage.setItem("cart", cartArr.toString())
                } else {
                    localStorage.setItem("cart", String(cart + "," + String(product.id)))
                }
            } else {
                localStorage.setItem("cart", String(cart + "," + String(product.id)))
            }

            checkInCart();

        }, []
    )

    const FavoriteHandler = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            let fav = localStorage.getItem("favorite")

            if (fav !== null) {
                let favArr = fav.split(",");

                if (favArr.includes(String(product.id))) {
                    favArr = favArr.filter((id) => {
                        return id !== String(product.id)
                    })
                    localStorage.setItem("favorite", favArr.toString())
                } else {
                    localStorage.setItem("favorite", String(fav + "," + String(product.id)))
                }
            } else {
                localStorage.setItem("favorite", String(fav + "," + String(product.id)))
            }

            checkInFav();

        }, []
    )


    useEffect(() => {
        checkInCart();
        checkInFav();

    }, [])



    return (

        <div className={"product-card"}>

            <NavLink to={"/products/" + product.id}>

                <div className={"product-card__image"}>
                    <img src={product.image} alt={product.title}/>
                </div>

                <div className={"product-card__title"}>
                    <h4>{product.title}</h4>
                </div>

            </NavLink>


            <div className={"product-card__category"}>
                {product.category}
            </div>

            <Stack direction={"row"}>

                    <span onClick={CartHandler}>
                        <IconButton aria-label={"Add to cart"} color={cartFlag ? "secondary" : "primary"}>
                            <ShoppingCart/>
                        </IconButton>
                    </span>

                <span onClick={FavoriteHandler}>
                    <IconButton aria-label={"Add to favorite"} color={favFlag ? "secondary" : "primary"}>
                        <HeartButton/>
                    </IconButton>
                    </span>

            </Stack>

            <div className={"product-card__price"}>
                <h3>${product.price}</h3>
            </div>

            <div className={"product-card__rating product-card-rating"}>
                <div className={"product-card-rating__top"}>
                    <img src={star} alt={"rate"} className={"product-card-rating__star"}/>
                    <span
                        className={"product-card-rating__rate"}
                        style={product.rating.rate > 3.5 ? {color: "#B5D495"} : {color: "#EF7873"}}
                    >{product.rating.rate.toFixed(1)}</span>
                </div>

                <div className={"product-card-rating__bottom"}>
                    <img src={people} alt={"count"} className={"product-card-rating__people"}/>
                    <span className={"product-card-rating__count"}>{product.rating.count}</span>
                </div>

            </div>

        </div>

    )
}

export default ProductCard