import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the id
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className='display-5 text-center mt-5'>Loading...</div>;
  }

  return (
    <div className='container mt-4'>
      <h2 className='text-center mb-4'>{product.title}</h2>
      <div className='row'>
        <div className='col-md-6'>
          <img src={product.thumbnail} alt={product.title} className='img-fluid rounded' />
        </div>
        <div className='col-md-6'>
          <h5 className='text-success'>$ {product.price}</h5>
          <p>{product.description}</p>
          <p className='text-danger'>Rating: {product.rating}</p>
          {/* You can add more product details here */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
