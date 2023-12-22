import { Link } from "react-router-dom";
import "./Item.css"
import React, { useState } from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import Swal from 'sweetalert2';

//Tarjetas con los productos
export const Item = ({id, name, img, description,price,stock }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   
    //agregar al carrito
    const { addItem } = useCart();
    const onAdd = (items) => {
      addItem({
        id,
        name,
        price,
      }, items);

      Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500,
      });
    };

  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <div className="border">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img className="foto" src={img} alt="" />
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" onClick={toggleDropdown}>
              Descripción
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <p className="dropdown-item-text">{description}</p>
              </div>
            )}
          </div>            
          <Link to={`/item/${id}`}>
            <button className="btn btn-outline-success">Detalles</button>
          </Link>
          <p><b>Precio:</b> $ {price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};