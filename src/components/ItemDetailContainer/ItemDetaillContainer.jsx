import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        getProductById("2")
        .then(Response => {
            setProduct(Response)
        })
    }, [])


    return (
        <div>

         <h1>detalle de producto</h1>
        <ItemDetail products={products} />

        </div>
        
       
    )
}

export default ItemDetailContainer