import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return(
        <div>
             <p>{name}</p>
            <img src={img} style={{width: 100}} />
           <p> ${price} </p>
           <Link to={"/item/$ {id} "}>ver detalle</Link>
            </div>
    )
}

export default Item