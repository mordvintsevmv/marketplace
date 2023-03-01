import React, {useEffect} from 'react';
import './App.css';
import "./fonts.scss"
import Sidebar from "./components/Sidebar/Sidebar";
import ItemList from "./components/ItemList/ItemList";
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home/Home";
import Products from "./components/Products/Products"
import ProductPage from "./components/ProductPage/ProductPage";
import FavoritePage from "./components/FavoritePage/FavoritePage";
import {useTypedSelector} from "./hooks/typedHooks";
import Categories from "./components/Categories/Categories";
import {useActions} from "./hooks/actions";

function App() {

    const theme = useTypedSelector(state => state.themeReducer)
    const {fetchProducts, fetchLists} = useActions()

    useEffect(()=>{
        fetchProducts()
        fetchLists()
    }, [])


    return (
        <div className={`app app-${theme}`}>

                <Sidebar/>

            <div className={`content content-${theme}`}>
                <Routes>

                    <Route path="/" element={<Home/>}/>

                    <Route path="/list" element={<ItemList/>}/>

                    <Route path="/products" element={<Products/>}/>

                    <Route path="/products/:productID" element={<Products><ProductPage/></Products>}/>

                    <Route path="/categories" element={<Categories/>}/>

                    <Route path="/categories/:category" element={<Categories/>}/>

                    <Route path="/favorite" element={<FavoritePage/>}/>


                </Routes>
            </div>


        </div>
    )
        ;
}

export default App;
