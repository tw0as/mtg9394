import './ItemDetail.css'

const ItemDetail = ({id, name, price, img, oracle}) => {
    return (
        <div className='itemContainer'>
            <h2>Name: {name} </h2>
            <h3>ID: {id} </h3>
            <img src={img} alt={name} />
            <h3>Price: ${price} </h3>
            <p><i><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target='_blank'>This is an audible description of the product.</a></i></p>
        </div>
    )
}

export default ItemDetail