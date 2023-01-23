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
    let catStack: React.ReactNode[] = []

    for (let i=0; i<catBut.length; i=i+2){
        catStack.push(
            <Stack direction={"row"} justifyContent="space-around" pb={"20px"}>
                {catBut[i]}
                {catBut[i+1] ? catBut[i+1] : null}
            </Stack>
        )
    }

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
                {catStack}
            </div>


            <div className={"cards-adaptive"}>
            {productCard}
            </div>

        </div>
    )
}

export default Categories