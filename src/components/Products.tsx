import React from 'react'
import { useEffect,useState } from 'react';

const Products = () => {
    const [product, setProduct] = useState([]);
  const getProducts = async () => {
    try {
      await fetch("https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
        .then((json) => setProduct(json));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
        {product.map((data:any)=>{
            return <>
            <img src={data.images[0]}  />
            </>
        })}
    </div>
  )
}

export default Products