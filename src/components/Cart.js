import React from "react";
import { useState } from "react";
const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((p) => p !== product));
  };

  return (
    <div className="cart-container">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{cart.reduce((a, b) => a + b.price, 0)}</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
    </div>
  );
};

export default Cart;
