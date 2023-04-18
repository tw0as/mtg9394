import './ItemDetail.css'

const ItemDetail = ({id, name, price, img, oracle}) => {
    return (
        <div className='itemContainer'>
            <h2>Name: {name} </h2>
            <h3>ID: {id} </h3>
            <img src={img} alt={name} />
            <h3>Price: ${price} </h3>
        </div>
    )
}

export default ItemDetail