import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="container">
      <h2 className='text-center mb-4 mt-3'>Product List</h2>
      <div className="row">
        {products.length !== 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className='display-5 text-center'>Data is Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
