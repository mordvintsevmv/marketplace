import React, {FC, useEffect, useState} from "react";
import Header from "../Header/Header";
import axios from "axios";
import CategoryButton from "../Buttons/CategoryButton";
import {useParams} from "react-router-dom";
import {IProduct} from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";
import {Stack} from "@mui/material";
import "../../App.css"
import "./Categories.scss"
const Categories: FC = () => {

    const [categories, setCategories] = useState<String[]>([])
    const catBut = categories.map(cat => <CategoryButton category={String(cat)}/>)

    const [products, setProducts] = useState<IProduct[]>([])
    const productCard = products.map(product => <ProductCard product={product} key={product.id}/>)


    const {category} = useParams()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => setCategories(res.data))
    }, [])

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => setProducts(res.data))
    }, [category])

    return (
        <div className={"categories"}>

            <Header title={"Categories"}/>

            <div className={"categories__buttons"}>
            <Stack direction={"row"} justifyContent="space-around">
                {catBut}
            </Stack>
            </div>


            <div className={"cards-adaptive"}>
            {productCard}
            </div>

        </div>
    )
}

export default Categories