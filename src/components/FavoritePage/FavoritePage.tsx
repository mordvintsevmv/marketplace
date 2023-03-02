import React, {FC} from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import {useTypedSelector} from "../../hooks/typedHooks";
import "../../App.css"

const FavoritePage: FC = () => {


    const {favorite, products} = useTypedSelector(state => state.productReducer)

    let favCards: Array<React.ReactNode>

    if (favorite.length !== 0 && products.length !== 0){
        favCards = favorite.map(favID => {
            const productID = products.findIndex(product => product.id === favID)
            const product = products[productID]
            return (<ProductCard product={product} key={product.id}/>)
        })
    } else {
        favCards = []
    }

    return (
        <div className={"favorite-page"}>
            <Header title={"Favorite Items"}/>

            <div className={"cards-adaptive"}>
                {favCards}
            </div>
        </div>
    )
}

export default FavoritePage