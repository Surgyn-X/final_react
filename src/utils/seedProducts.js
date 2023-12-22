import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/configfirebase";

const products = [
    {name: "Reloj digital marca CASIO", 
    img: "https://falabella.scene7.com/is/image/Falabella/15268259_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70", 
    price: 30.00, 
    category: "Relojes Casio", 
    description: "¡Siente la escencia de un reloj Casio en tu muñequera!",
    age: "Adulto",
    size:"Chico / Mediano",
    brand:"Casio",
    weigth:"420 gramos",
    med: "No",
    stock: 10 },
    {name: "Reljos mediano marca CASIO", 
    img: "https://falabella.scene7.com/is/image/Falabella/gsc_117730420_1877659_1?wid=1500&hei=1500&qlt=70", 
    price:35.00, 
    category: "Relojes Casio", 
    description: "¡Excelente reloj mediano Casio!",
    age: "Señor",
    size:"Chico / Mediano /",
    brand:"Casio",
    weigth:"400 gramos",
    med: "No",
    stock: 10 },
    {name: "Relojes grande marca CASIO",
    img: "https://falabella.scene7.com/is/image/Falabella/gsc_117731287_1878191_1?wid=1500&hei=1500&qlt=70", 
    price: 20.00, 
    category: "Relojes Casio", 
    description: "¡Excelente reloj grande Casio!",
    age: "Joven",
    size:"Chico / Mediano / Grande",
    brand:"Casio",
    weigth:"300 gramos",
    med: "No",
    stock: 10 },
    {name: "Relojes marca THEMANERA", 
    img: "https://falabella.scene7.com/is/image/Falabella/gsc_119235018_2268486_1?wid=1500&hei=1500&qlt=70", 
    price: 60.00, 
    category: "Relojes THEMANERA", 
    description: "Siente la elegancia con nuestras marcas de relojes THEMANERA",
    age: "Adulto",
    size:"Todos",
    brand:"THEMANERA",
    weigth:"200 gramos",
    med: "No",
    stock: 10 },
    {name: "Relojes marca THEMANERA", 
    img: "https://falabella.scene7.com/is/image/Falabella/gsc_119242741_2271448_1?wid=1500&hei=1500&qlt=70", 
    price:70.00, 
    category: "Relojes THEMANERA", 
    description: "THEMANERA es el jefe en la elegancia, pruebalo con nuestro nuevo modelo para caballeros",
    age: "Señor",
    size:"Todos",
    brand:"THEMANERA",
    weigth:"250 gramos",
    med: "No",
    stock: 10 },
    {name: "Relojes marca THEMANERA", 
    img: "https://falabella.scene7.com/is/image/Falabella/gsc_119242478_2271303_1?wid=1500&hei=1500&qlt=70", 
    price:90.00 , 
    category: "Relojes THEMANERA", 
    description: "Ahora los jovenes pueden ser la elegancia del grupo con nuestra nueva marca para jovenes",
    age: "Joven",
    size:"Todos",
    brand:"THEMANERA",
    weigth:"400 gramos",
    med: "No",
    stock: 10 },
    { name: "Reloj para niños Disney", 
    img: "https://falabella.scene7.com/is/image/Falabella/50254933_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70", 
    price:10.00 , 
    category: "Relojes para niños", 
    description: "Mickey y Mini estaran para ti cuando los necesites",
    age: "Todos",
    size:"Todos",
    brand:"Disney",
    weigth:"100 gramos",
    med: "No",
    stock: 10 },
    { name: "Relos para niñas Disney", 
    img: "https://falabella.scene7.com/is/image/Falabella/50254926_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70", 
    price:20.00, 
    category: "Relojes para niñas", 
    description: "¡Que la alegria este a tan solo un movimiento de muñeca!",
    age: "Todos",
    size:"Todos",
    brand:"Disney",
    weigth:"100 gramos",
    med: "No",
    stock: 10 },
  ];

  export const seedProducts = () => {
    products.forEach((product) => {
      addDoc(collection(db, "products"), product);
    });
  };