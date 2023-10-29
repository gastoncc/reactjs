import Item from "../item/item"

const ItemList = ({Products}) => {
    return(
       
       <div>
            {
    Products.map(prod => {
        return(
            <Item key={prod.id} {... prod}/>

        )
    })
}
</div>
    )
}

export default ItemList

