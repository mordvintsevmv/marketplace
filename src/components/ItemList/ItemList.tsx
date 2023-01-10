import {FC, useEffect, useMemo, useState} from "react";
import "./ItemList.scss"
import {AgGridReact} from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import axios from "axios";
import Header from "../Header/Header";

interface ItemListProps {

}
const Rating = (data: any) => {

    return(
        <>
            {data.value.rate}
        </>
        )
}

const ProductImage = (data: any) => {

    return(
        <>
            <img src={data.value} alt={"product"}/>
        </>
    )
}

const ItemList: FC<ItemListProps> = () => {

    const [rowData, setRowData] = useState([]);

    const [columnDefs, setColumnDefs] = useState([
        {field: "id"},
        {field: "category"},
        {field: "description"},
        {field: "image", cellRenderer: ProductImage},
        {field: "price"},
        {field: "rating", cellRenderer: Rating},
        {field: "title"},
    ]);

    const defaultColDef = useMemo(() => ({
            sortable: true,
            filter: true
        }
    ), [])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setRowData(res.data)
            })

    }, [])

    return (
        <div className="itemlist content">

            <Header title={"ItemList"}/>

            <div className={"ag-theme-alpine itemlist__table"}>

                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                    rowSelection='multiple'
                />

            </div>

        </div>
    )
}

export default ItemList