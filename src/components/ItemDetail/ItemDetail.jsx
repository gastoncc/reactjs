import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ name, img, price, stock, description }) => {
    return (
        <div>
            <p>{name}</p>
            <img src={img} style={{ width: 100 }} />
            <p> ${price} </p>
            <p> description: {description}</p>
            <ItemCount stock={stock} onAdd={(quatity) => console.log("cantidad agregada: " + quatity)}/>
        </div>
    )
}

export default ItemDetail