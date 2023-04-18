import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, img}) => {
  return (
    <div className='prodCard'>
        <img className='prodImg' src={img} alt={name} />
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <p>Price: ${price}</p>
        <Link to={`/item/${id}`}> See Details </Link>
    </div>
  )
}

export default Item