import React, {FC, useEffect, useState} from "react";
import Header from "../Header/Header";
import axios from "axios";
import CategoryButton from "../Buttons/CategoryButton";
import {useParams} from "react-router-dom";
import {IProduct} from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";
import {Grid} from "@mui/material";
import "../../App.css"
import "./Categories.scss"

const Categories: FC = () => {

    const [categories, setCategories] = useState<String[]>([])
    const categoryButtons = categories.map(category => <Grid item><CategoryButton category={String(category)}/></Grid>)

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

            <Grid container justifyContent="space-around" alignItems="center">
                {categoryButtons}
            </Grid>

            <div className={"cards-adaptive categories__cards"}>
                {productCard}
            </div>

        </div>
    )
}

export default Categories