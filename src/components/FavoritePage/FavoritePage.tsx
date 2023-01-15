import {FC} from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import {useTypedSelector} from "../../hooks/typedHooks";

const FavoritePage: FC = () => {


    const {products} = useTypedSelector(state => state.productReducer)
    const favString = localStorage.getItem("favorite")
    let favCards: Array<React.ReactNode> = []

    if (favString !== null) {
        const favorite = favString.split(",");

        favCards = products.map(product => favorite.includes(String(product.id)) ?
            <ProductCard product={product}/> : null)
    }

    return (
        <div className={"favorite-page"}>
            <Header title={"Favorite Items"}/>

            <div>
                {favCards}
            </div>
        </div>
    )
}

export default FavoritePage