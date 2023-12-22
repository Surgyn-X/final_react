import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/configfirebase";
import { HamsterLoading } from "../HamsterLoading/HamsterLoading";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  // Obtén la categoría desde los parámetros de la URL
  const { category } = useParams();

  // Estado para almacenar la lista de productos
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setProduct] = useState(null);

  // Función para obtener productos desde la base de datos según la categoría
  const getProductsDB = async (category) => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    const resp = await getDocs(myProducts);
    if (resp.size === 0) {
    }

    // Mapea los documentos a un array de productos y actualiza el estado
    const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(productList);
    setIsLoading(false);
  };

  const getProductById = async (id) => {
    const productRef = doc(db, "products", id);
    const resp = await getDoc(productRef);
    if (resp.exists()) {
      const prod = {
        id: resp.id,
        ...resp.data()
      };
      setProduct(prod);
    }
  };

  // Efecto para cargar los productos
  useEffect(() => {
    setIsLoading(true);
    getProductsDB(category);
    getProductById(" ");
  }, [category]);

  // Renderiza un componente de carga mientras se están obteniendo los productos, de lo contrario, renderiza la lista de productos
  return <>{isLoading ? <HamsterLoading /> : <ItemList products={products} />} </>;
};
