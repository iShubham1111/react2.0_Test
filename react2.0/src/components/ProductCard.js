import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={product.thumbnail} alt="" width={'354px'} height={'200px'} className='rounded-top'/>
        <div className="card-body">
          <h5 className="card-title">{product.title.length > 27 ? product.title.slice(0, 27) + '...' : product.title}</h5>
          <p className="card-text mb-0">{product.description.length > 45 ? product.description.slice(0, 38) + '...' : product.description}</p>
          <h5 className="text-success mb-0">$ {product.price}</h5>
          <p className='card-text mb-2 text-danger'>Rating: {product.rating}</p>
          <Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;