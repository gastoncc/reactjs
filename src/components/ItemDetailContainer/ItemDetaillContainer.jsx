import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()
    console.log(params)
        useEffect(() => {
        getProductById(itemId)
        .then(Response => {
            setProduct(Response)
        })
    }, [itemId])


    return (
        <div>

         <h1>detalle de producto</h1>
        <ItemDetail {...product} />

        </div>
        
       
    )
}

export default ItemDetailContainer