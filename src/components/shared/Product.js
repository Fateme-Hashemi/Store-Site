import React, {useContext} from 'react';
import { shorten, easeIncart, quantitiyCount } from '../../helper/function';
import { Link } from 'react-router-dom';
import trashicon from "../../assets/trash.svg";
import styles from "./Product.module.css"
//context
import CardContextProvider, { CartContext } from '../../Context/CardContextProvider';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
       
        <div className={styles.container} >
             
            <img className={styles.cardImage} src={productData.image} alt="product" />
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantitiyCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashicon} style={{color: "white"}} alt="trash" /></button>}
                    {quantitiyCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantitiyCount(state, productData.id) > 0 && <span className={styles.counter}>{quantitiyCount(state, productData.id)}</span>}
                    {
                        easeIncart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;