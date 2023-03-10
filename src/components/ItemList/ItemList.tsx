import {FC, useEffect, useMemo, useState} from "react";
import "./ItemList.scss"
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import "ag-grid-community/dist/styles/ag-theme-material.css"

import Header from "../Header/Header";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/actions";
import {IProduct} from "../../types/product";
import WarningBanner from "../WarningBanner/WarningBanner";

interface ItemListProps {

}

const Rating = (data: any) => {

    return (
        <>
            {data.value.rate}
        </>
    )
}

const ProductImage = (data: any) => {

    return (
        <>
            <img src={data.value} alt={"product"}/>
        </>
    )
}

const ItemList: FC<ItemListProps> = () => {

    const [rowData, setRowData] = useState<IProduct[]>([]);

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

    const {products} = useTypedSelector(state => state.productReducer)
    const {fetchProducts} = useActions()

    useEffect(() => {
        if (products.length === 0) {
            fetchProducts();
        }

        document.title = 'ItemList';
        setRowData(products);
    }, [products])

    return (
        <div className="item-list">

            <Header title={"ItemList"}/>

            <WarningBanner
                title={"Work In Progress"}
                description={"At the moment, the table just displays all the products. In the future, the functionality will be expanded."}/>


            <div className={"ag-grid-material item-list__table"}>

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