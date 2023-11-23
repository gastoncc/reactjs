import { useAsync } from '../../hooks/useAsync'
import { getItemById } from '../../firebase/firestore/products' 
import { useParams } from 'react-router-dom'

import Loader from '../Loader/Loader'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const asyncFunction = () => getItemById(itemId)
    const {data: item, loading, error } = useAsync(asyncFunction, [itemId])

    console.log(item);

    if (loading) {
        return(
            <Loader/>
        )
    }

    if(!item.name){
        return(
            <h2 style={{fontSize: 40, position:'absolute', top: '40%', left:'50%', transform: 'translateX(-50%)'}}>No existe</h2>
        )
    }

    if (error) {
        return(
            <h2 style={{fontSize: 40, position:'absolute', top: '40%', left:'50%', transform: 'translateX(-50%)'}}>No se realizo la compra</h2>
        )
    }

    return(
        <ItemDetail greeting={'Detalle del producto: '} {...item}/>
    )
}

export default ItemDetailContainer


