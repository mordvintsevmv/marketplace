import React, {FC} from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import {useTypedSelector} from "../../hooks/typedHooks";
import "../App/App.css"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const FavoritePage: FC = () => {


    const {favorite, products} = useTypedSelector(state => state.productReducer)

    let favCards: Array<React.ReactNode>

    if (favorite.length !== 0 && products.length !== 0) {
        favCards = favorite.map(favID => {
            const productID = products.findIndex(product => product.id === favID)
            const product = products[productID]
            return (<ProductCard product={product} key={product.id}/>)
        })
    } else {
        favCards = []
    }

    if (favCards.length !== 0) {
        return (
            <div className={"favorite-page"}>
                <Header title={"Favorite Items"}/>

                <div className={"cards-adaptive"}>
                    {favCards}
                </div>
            </div>
        )
    } else {
        return (
            <div className={"favorite-page"}>
                <Header title={"Favorite Items"}/>

                <Alert severity="info">
                    <AlertTitle>Empty favorite list</AlertTitle>
                    Add items to favorite list to save them!
                </Alert>
            </div>)

    }
}

export default FavoritePage