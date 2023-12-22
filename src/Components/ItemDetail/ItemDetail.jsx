import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";
import Swal from 'sweetalert2';

//Muetsras los detalles de un producto
export const ItemDetail = ({ id, name, description, img, price, stock, age, size, brand, weight, med }) => {
  const { addItem } = useCart();

  //Agrega un producto al carrito
  const onAdd = (items) => {
    addItem({
      id,
      name,
      description,
      img,
      price,
      age,
      size,
      brand,
      weight,
      med,
    }, items);

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="border">
      <div className="car">
        <div className="card-body ">
          <img className="fot" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
          <div className="card-tex">
            <p><b>Descripción</b></p>
            <p>{description}</p>
            <p><b>Edad:</b> {age}</p>
            <p><b>Tamaño:</b> {size}</p>
            <p><b>Marca:</b> {brand}</p>
            <p><b>Peso del Producto:</b> {weight}</p>
            <p><b>Producto Medicado:</b> {med}</p>
          </div>
          <p><b>Precio:</b> $ {price}</p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
