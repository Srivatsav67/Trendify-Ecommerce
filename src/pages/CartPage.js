import React from 'react';
import { useSelector } from 'react-redux';

// Cart Page to display items in the cart
const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <p>Total Items: {cart.totalQuantity}</p>
      <p>Total Price: ₹{cart.totalPrice}</p>
    </div>
  );
};

export default CartPage;
