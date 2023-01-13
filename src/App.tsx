import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import ItemList from "./components/ItemList/ItemList";
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home/Home";
import Products from "./components/Products/Products"
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
    return (
        <div className="app">
            <Sidebar/>

            <Routes>

                <Route path="/" element={<Home/>}/>

                <Route path="/list" element={<ItemList/>}/>

                <Route path="/products" element={<Products/>}/>

                <Route path="/products/:productID" element={<Products><ProductPage/></Products>}/>

            </Routes>

        </div>
    );
}

export default App;
