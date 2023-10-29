const Item = ({name, img, price}) => {
    return(
        <div key={prod.id}>
             <p>{name}</p>
            <img src={img} style={{width: 100}} />
           <p> ${price} </p>
           <button>ver detalle</button>
            </div>
    )
}

export default Item