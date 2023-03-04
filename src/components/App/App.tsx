import React, {useEffect} from 'react';
import './App.css';
import Sidebar from "../Sidebar/Sidebar";
import ItemList from "../ItemList/ItemList";
import {Route, Routes} from "react-router-dom"
import Home from "../Home/Home";
import Products from "../Products/Products"
import ProductPage from "../ProductPage/ProductPage";
import FavoritePage from "../FavoritePage/FavoritePage";
import {useTypedSelector} from "../../hooks/typedHooks";
import Categories from "../Categories/Categories";
import {useActions} from "../../hooks/actions";
import CartPage from "../CartPage/CartPage";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "../../mui/themes";


function App() {

    const theme = useTypedSelector(state => state.themeReducer)
    const {fetchProducts, fetchLists} = useActions()

    useEffect(() => {
        fetchProducts()
        fetchLists()
    }, [])


    return (
        <ThemeProvider theme={theme === 'dark' ? createTheme(darkTheme) : createTheme(lightTheme)}>
            <CssBaseline/>

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

                        <Route path="/cart" element={<CartPage/>}/>

                    </Routes>
                </div>
            </div>

        </ThemeProvider>
    )
        ;
}

export default App;
