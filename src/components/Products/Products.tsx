import {FC, PropsWithChildren, useEffect} from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import {IProduct} from "../../types/product";
import "./Products.scss"
import "../App/App.css"
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/actions";
import Loading from "../Loading/Loading";

const Products: FC<PropsWithChildren> = ({children}) => {

    const {products, loading, error} = useTypedSelector(state => state.productReducer)
    const {fetchProducts} = useActions();

    const ProductCards = products.map((product: IProduct) => <ProductCard key={product.id} product={product}/>)

    useEffect(() => {
        document.title = 'Products';
        if (products.length === 0) {
            fetchProducts();
        }
    }, []);

    let content: JSX.Element

    if (loading) {
        content =
            <Loading/>
    } else if (error) {
        content =
            <div>
                {error}
            </div>
    } else {
        content =
            <div className={children ? " blured cards-adaptive" : "cards-adaptive"}>
                {ProductCards}
            </div>
    }

    return (
        <div className={"products"}>

            {children}

            <Header title={"Products"}/>

            {content}

        </div>
    )
}

export default Products