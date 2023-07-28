import React from 'react';
import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <div>
            
            
            <footer className={styles.footer}>
  <div className={styles.footercontent}>
    <div className={styles.footerlinks}>
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </div>
    <div className={styles.footerinfo}>
      <p>Company Name &copy; 2023. All rights reserved.</p>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;