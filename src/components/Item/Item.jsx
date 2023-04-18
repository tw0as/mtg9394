import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, img}) => {
  return (
    <div className='prodCard'>
        <img className='prodImg' src={img} alt={name} />
        <h3>{name}</h3>
        <p><b>ID:</b> {id} </p>
        <p><b>Price:</b> ${price}</p>
        <br />
        <Link to={`/item/${id}`}><b>See Details</b></Link>
    </div>
  )
}

export default Item