import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greating}) => {
    const [products, setProducts] = useState(null)
    const { categoryId } = useParams()
    console.log(categoryId)
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
        .then(Response => {
            setProduct(Response)
        })
    }, [categoryId])


    return (
        <div>

         <h1>detalle del producto</h1>
         <ItemDetail {... product} />

        </div>
        
       
    )
}

export default ItemListContainer