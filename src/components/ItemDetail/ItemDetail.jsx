import 

function ItemDetail({ name, img, price, stock }) {
    return (
        <div key={prod.id}>
            <p>{name}</p>
            <img src={img} style={{ width: 100 }} />
            <p> ${price} </p>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default ItemDetail