import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import basket from "../img/basket.png";
import { Link } from "react-router-dom";
import Loginpage from './Loginpage';
//context
import { CartContext } from '../Context/CardContextProvider';

const Navbar = () => {
  const state = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.leftnav}>
       <Link to="/shop">
       <img src={basket} className={styles.basketicon} />
       </Link>
       <span style={{ background: "white", padding: "3px 5px", borderRadius: "12px", marginRight: "10px" }}>
          {state.state.itemsCounter}
        </span>
        <Link to="/login" className={styles.login}>Log in</Link>
      </div>
      <div className={styles.rightnav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
