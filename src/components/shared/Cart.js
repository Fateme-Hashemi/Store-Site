import React, {useContext} from 'react';
import { shorten } from '../../helper/function';
import styles from "./Cart.module.css";
//context
import { CartContext } from '../../Context/CardContextProvider';
//icons
import trashicon from "../../assets/trash.svg";

const Cart = (props) => {
    const {image,title, price, quantity} = props.data;
    const {dispatch}= useContext(CartContext);

    return (
        <div className={styles.container} >
            <img className={styles.productImage} src={image} />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})} >-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})} ><img src={trashicon} alt="trash" /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})} >+</button>
            </div>
        </div>
    );
};

export default Cart;