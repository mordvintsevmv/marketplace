import React, {FC, useEffect, useState} from "react";
import Header from "../Header/Header";
import axios from "axios";
import CategoryButton from "../Buttons/CategoryButton";
import {useParams} from "react-router-dom";
import {IProduct} from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";

const Categories: FC = () => {

    const [categories, setCategories] = useState<String[]>([])
    const catBut = categories.map(cat => <CategoryButton category={String(cat)}/>)

    const [products, setProducts] = useState<IProduct[]>([])
    const productCard = products.map(product => <ProductCard product={product}/>)


    const {category} = useParams()

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => setCategories(res.data))
    },[])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => setProducts(res.data))
    },[category])

    return (
        <div className={""}>


            <Header title={"Categories"}/>

            {catBut}

            {productCard}

        </div>
    )
}

export default Categories