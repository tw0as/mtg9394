import { getAProduct } from "../../asyncmock.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const [product, setProducts] = useState(null);

  const {idItem} = useParams ();

  useEffect(() => {

    getAProduct(idItem)
    .then(res => setProducts(res))
  }, [idItem])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
