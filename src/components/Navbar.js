import React from 'react';
import styles from './Navbar.module.css';
import basket from "../img/basket.png";
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div className={styles.container}>
            

        <div className={styles.leftnav}>
        <img src={basket} className={styles.basketicon} />
       <a href='http://localhost:3000/loginpage' className={styles.login}  target='-blank'>Log in</a>
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