import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
    return(
        <div className={classes.itemCard}>
            <h2>{name}</h2>
            {stock == 0 && <img className={classes.sinStock} src={StockLess} alt="Sin stock" />}
            <h3>Precio: $ {price}</h3>
            <h3>Stock: {stock}</h3>
            <Link to={`/item/${id}`} className={classes.itemCardButton}>Informacion</Link>
        </div>
    )
}

export default Item