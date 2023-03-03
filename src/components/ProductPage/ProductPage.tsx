import React, {FC, useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import "./ProductPage.scss"
import axios from "axios";
import {IProduct} from "../../types/product";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import FavoriteButton from "../Buttons/FavoriteButton";
import Loading from "../Loading/Loading";
import {Stack} from "@mui/material";
import CartButton from "../Buttons/CartButton";
import {useTypedSelector} from "../../hooks/typedHooks";
import StarIcon from '@mui/icons-material/Star';
import GroupsIcon from '@mui/icons-material/Groups';

const ProductPage: FC = () => {

    const {productID} = useParams();
    const {products} = useTypedSelector(state => state.productReducer)
    const theme = useTypedSelector(state => state.themeReducer)

    const [product, setProduct] = useState<IProduct>()

    useEffect(() => {

        const prod = products.find(product => productID === String(product.id));
        if (prod) {
            setProduct(prod)
        } else {

            axios.get("https://fakestoreapi.com/products/" + productID)
                .then(res => {
                    setProduct(res.data)
                })
        }
    }, [productID])

    if (product) {
        return (
            <div className={`product-page product-page-${theme}`}>
                <NavLink to={"/products"}>
                    <div className={"product-page__cross"}>
                        <IconButton>
                            <Close/>
                        </IconButton>
                    </div>

                </NavLink>

                <div className={"product-page__image"}>
                    <img src={product.image} alt={product.title}/>
                </div>

                <div className={"product-page__title"}>
                    <h3>{product.title}</h3>
                </div>

                <div className={"product-page__category"}>
                    {product.category}
                </div>

                <div className={"product-page__description"}>
                    <h4>Description</h4>
                    {product.description}
                </div>

                <div className={"product-page__price"}>
                    <h2>${product.price}</h2>
                </div>

                <Stack direction={"row"} alignItems="center" spacing={2} sx={{mt: 2}}>

                    <CartButton productID={product.id} type={'button'}/>

                    <FavoriteButton productID={product.id}/>

                </Stack>

                <div className={"product-page__rating product-page-rating"}>
                    <div className={"product-page-rating__top"}>
                        <StarIcon/>
                        <span
                            className={"product-page-rating__rate"}
                            style={product.rating.rate < 3.5 ? {color: "#EF7873"} : {color: "#B5D495"}}
                        >{product.rating.rate.toFixed(1)}</span>
                    </div>

                    <div className={"product-page-rating__bottom"}>
                        <GroupsIcon fontSize={'small'}/>
                        <span className={"product-page-rating__count"}>{product.rating.count}</span>
                    </div>

                </div>

            </div>
        )
    } else {
        return (


            <div className={`product-page product-page-${theme}`}>
                <NavLink to={"/products"}>
                    <div className={"product-page__cross"}>
                        <IconButton>
                            <Close/>
                        </IconButton>
                    </div>
                </NavLink>

                <Loading/>
            </div>)
    }
}

export default ProductPage