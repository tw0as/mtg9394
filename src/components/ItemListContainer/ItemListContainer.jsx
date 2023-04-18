import { getProducts, getProductsByCat } from "../../asyncmock.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";

const ItemListContainer = () => {

  const [product, setProduct] = useState([]);

  const {idCategory} = useParams ();

  useEffect(() => {

    const prodFunction = idCategory ? getProductsByCat : getProducts;

    prodFunction(idCategory)
      .then(res => setProduct(res))
      .catch(error => console.error(error))
  }, [idCategory]);

  return (
    <>
      <ItemList products={product} />
    </>
  )
}

export default ItemListContainer