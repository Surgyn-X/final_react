import { Item } from "../Item/Item"
import "./ItemList.css"

export const ItemList = ({products}) => {
  return (
    <>
    <div>
      <div className="container">
        {products.map( product => <Item key={product.id} {...product}  />)}
        </div>
    </div>
    </>
  )
}