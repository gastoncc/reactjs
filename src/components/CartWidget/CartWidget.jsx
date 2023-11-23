import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return(
        <>
        <button className={classes.cartWidget}>
            <img src={cartIcon} alt='Carrito'/>
            <span>{totalQuantity}</span>            
        </button>
        </>
    )
}

export default CartWidget