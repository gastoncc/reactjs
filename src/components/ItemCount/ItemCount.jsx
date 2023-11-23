
import { useCount } from '../../hooks/useCount'



const ItemCount = ({stock, onAdd}) => {

    const {count, decrement, increment} = useCount((stock>0 ? 1 : 0), stock)

    return(
        <div className={classes.itemCount}>
            <div className={classes.counter}>
                <button className={classes.itemCountButton} onClick={decrement} disabled={stock==0}>
                </button>
                <label className={classes.itemCountLabel}>{count}</label>
                <button className={classes.itemCountButton} onClick={increment} disabled={stock==0}>
                </button>
            </div>
            <div className={classes.adder}>
                <button className={classes.itemAddButton} onClick={() => onAdd(count)} disabled={count==0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount