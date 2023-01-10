import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./ProductPage.scss"
import axios from "axios";
import {IProduct} from "../../types/product";
import star from "../../img/star.svg";
import people from "../../img/people.svg";

const ProductPage: FC = () => {

    const {productID} = useParams();

    const [product, setProduct] = useState<IProduct | null>()

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/"+productID)
            .then(res => {
                setProduct(res.data)
            })
    }, [productID])

    return(
        <div className={"product-page"}>

            <span className={"product-page__image"}>
                <img src={product?.image} alt={product?.title}/>
            </span>

            <span className={"product-page__title"}>
                <h4>{product?.title}</h4>
            </span>

            <span className={"product-page__category"}>
                {product?.category}
            </span>

            <div className={"product-page__price"}>
                <h2>${product?.price}</h2>
            </div>

            <div className={"product-page__rating product-page-rating"}>
                <div className={"product-page-rating__top"}>
                    <img src={star} alt={"rating"} className={"product-page-rating__star"}/>
                    <span
                        className={"product-page-rating__rate"}
                        style={product?.rating.rate > 3.5 ? {color: "#B5D495"} : {color: "#EF7873"}}
                    >{product?.rating.rate.toFixed(1)}</span>
                </div>

                <div className={"product-page-rating__bottom"}>
                    <img src={people} alt={"count"} className={"product-page-rating__people"}/>
                    <span className={"product-page-rating__count"}>{product?.rating.count}</span>
                </div>

            </div>

        </div>
    )
}

export default ProductPage