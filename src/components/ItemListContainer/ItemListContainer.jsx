import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams ()
    console.log(categoryId)
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction (categoryId)
        .then(Response => {
            setProducts(Response)
        })
    }, [categoryId])


    return (
        <div>

         <h1> {greeting} </h1>
         <ItemList products= {products} />

        </div>
        
       
    )
}

export default ItemListContainer