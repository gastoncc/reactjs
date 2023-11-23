import LinkButton from '../LinkButton/LinkButton'
import Button from '../Button/Button'
import { useCart } from '../../context/CartContext'

const Cart = () => {

    const {cart, removeItem, clearCart, totalPrice} = useCart()

    return(
        <>
        <div className={classes.cart}>
            {
                cart.length !== 0 ?
                <>

                    <div className={classes.cartList}>

                        <table style={{width: 900}}>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Precio U.</th>
                                    <th>Subtotal</th>
                                    <th>Quitar</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                cart.map(prod => {
                                    return(
                                        <tr key={prod.id}>
                                            <td className={classes.tableRowName}>{prod.name}</td>
                                            <td>{prod.quantity}</td>
                                            <td>$ {prod.price}</td>
                                            <td>$ {prod.price * prod.quantity}</td>
                                            <td>
                                                <button className={classes.closeButton} onClick={() => removeItem(prod.id)} title='Eliminar item'>
                                                    
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>

                        <h2>Total ${totalPrice}</h2>

                        <div className={classes.cartControl}>
                            <LinkButton path={'/checkout'} label={'Crear orden'}/>
                            <Button label={'Vaciar carrito'} callback={clearCart}/>
                            <LinkButton path={'/'} label={'Volver'}/>
                        </div>

                    </div>
                </>
                :
                <>

                    <div className={classes.emptyCart}>
                        <img className={classes.emptyCartImg} src={emptyCart} alt='Carrito vacio'/>
                    </div>

                    <div className={classes.cartControl}>
                        <LinkButton path={'/'} label={'Volver'}/>
                    </div>

                </>
            }           

        </div>
        </>
    )
}

export default Cart