import React, {useContext} from 'react';
import { shorten } from '../../helper/function';

//context
import { CartContext } from '../../Context/CardContextProvider';
//icons
import trashicon from "../../assets/trash.svg";

const Cart = (props) => {
    const {image,title, price, quantity} = props.data;
    const {dispatch}= useContext(CartContext);

    return (
        <div>
           <img src={image} alt="imageproduct" />
           <div>
                <h3>
                    {shorten(title)}
                </h3>
           </div>
           <div>
                <span>{quantity}</span>
           </div>
           <div>
                {
                    quantity > 1 ?
                    <button onClick={()=> dispatch({type: "DECREASE", payload:props.data })}>-</button> :
                   <button onClick={()=> dispatch({type: "REMOVE_ITEM" , payload:props.data })}> <img src={trashicon} style={{width: "20px"}} /></button>

                }
                <button onClick={()=> dispatch({type: "ADD_ITEM" , payload:props.data })}>+</button>
           </div>
        </div>
    );
};

export default Cart;