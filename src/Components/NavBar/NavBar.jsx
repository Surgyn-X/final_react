import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
      <nav className="navbar">
        <div className="navbar-brand">Relojeria Relojeria</div>
        <div className="nav-links">
        <Link to={"/"}>
        <button className="nav-link">Home</button>
          </Link>
          <Link to={"/category/Relojes Casio"}>  
          <button className="nav-link" >Relojes Casio</button>
          </Link>
          <Link to={"/category/Relojes THEMANERA"}> 
          <button className="nav-link" >Relojes THEMANERA</button>
          </Link>
          <Link to={"/category/Relojes para niños"}> 
          <button className="nav-link" >Relojes para niños</button>
          </Link>  
          <Link to={"/category/Relojes para niñas"}> 
          <button className="nav-link">Relojes para niñas</button> 
          </Link>
        </div>
        <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
    </>
    );
  };