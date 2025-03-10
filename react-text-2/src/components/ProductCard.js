import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-3 d-flex justify-content-center">
      <div 
        className="card product-card shadow-sm" 
        style={{ width: '650px', height: 'auto' }} 
      >
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="card-img-top rounded-top" 
          style={{ height: '150px', objectFit: 'cover' }}  
        />
        <div className="card-body">
          <h5 className="card-title">
            {product.title.length > 27 ? product.title.slice(0, 27) + '...' : product.title}
          </h5>
          <p className="card-text mb-0">
            {product.description.length > 45 ? product.description.slice(0, 38) + '...' : product.description}
          </p>
          <h5 className="text-success mb-0">$ {product.price}</h5>
          <p className="card-text mb-2 text-danger">Rating: {product.rating}</p>
          <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
