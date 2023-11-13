import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

const restar = () => {
    if(count > 1) {
        setCount(prev => prev - 1)
    }
} 
const sumar = () => {
    if(count < stock) {
        setCount(prev => prev + 1)
    }
}
(quantity) => console.log ("cantidad agregada: " + quantity)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={sumar}>sumar</button>
            <button onClick={() => onAdd(count)}>agregar al carrito</button>
            <button onClick={restar}>restar</button>
        </div>
    )
}

export default ItemCount