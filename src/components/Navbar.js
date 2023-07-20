import React from 'react';
import styles from './Navbar.module.css';
import basket from "../img/basket.png";
import {Link} from "react-router-dom";
import Loginpage from './Loginpage';

const Navbar = () => {
    return (
        <div className={styles.container}>
            

        <div className={styles.leftnav}>
        <img src={basket} className={styles.basketicon} />
       <Link to="/login" className={styles.login}>Log in</Link>
        </div>

        <div className={styles.rightnav}>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>

        </div>








        </div>
    );
};

export default Navbar;