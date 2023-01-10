import {FC} from "react";
import {IProduct} from "../../types/product";
import "./ProductCard.scss"
import star from "../../img/star.svg"
import people from "../../img/people.svg"
import {NavLink} from "react-router-dom";

interface ProductCardProps {
    product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
    return (
        <NavLink to={"/products/" + product.id}>

            <div className={"product-card"}>

                <div className={"product-card__image"}>
                    <img src={product.image} alt={product.title}/>
                </div>

                <div className={"product-card__title"}>
                    <h4>{product.title}</h4>
                </div>

                <div className={"product-card__category"}>
                    {product.category}
                </div>

                <div className={"product-card__price"}>
                    <h2>${product.price}</h2>
                </div>

                <div className={"product-card__rating product-card-rating"}>
                    <div className={"product-card-rating__top"}>
                        <img src={star} alt={"rating"} className={"product-card-rating__star"}/>
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
        </NavLink>

    )
}

export default ProductCard