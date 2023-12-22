import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';
import "./Cart.css"

//Carrito
export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, totalCartItems, removeItem, updateItemQuantity } = useContext(CartContext);

  //confirmacion de productos
  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Carrito de compras vacio",
        text: "Por favor, revise que los productos fueran agregados",
        icon: "error"
      });

    } else {
      navigate("/confirmar-compra");
    }
  };
  
  return (
    <div className="box">
      <h2>Carrito</h2>
      <div>
        {cartItems.map((item) => (
          <div className="minibox" key={item.id}>
            <p>Nombre: {item.name}</p>
            <p>Precio Unitario: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Sub total: ${item.subTotal}</p>
            <div>
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>Reducir</button>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>Incrementar</button>
            </div>
            <button onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <p>Suma total del carrito ${totalCartItems}</p>

      <button onClick={handleConfirmOrder}>Confirmar</button>
    </div>
  );
};
