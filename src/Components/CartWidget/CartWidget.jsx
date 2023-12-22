import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


export const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart">
      <div className="cart-widget">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">({totalQuantity})</span>
      </div>
    </Link>
  );
};