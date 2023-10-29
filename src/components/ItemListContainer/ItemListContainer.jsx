import { useState, useEffect } from "react"
import { getProducts, getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemListContainer = ({greating}) => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        getProductsById("2")
        .then(Response => {
            setProduct(Response)
        })
    }, [])


    return (
        <div>

         <h1>detalle del producto</h1>
         <ItemDetail {... product} />

        </div>
        
       
    )
}

export default ItemListContainer