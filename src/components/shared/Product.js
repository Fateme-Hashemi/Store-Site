import React, {useContext} from 'react';
import { shorten, easeIncart, quantitiyCount } from '../../helper/function';
import { Link } from 'react-router-dom';
import trashicon from "../../assets/trash.svg";
//context
import CardContextProvider, { CartContext } from '../../Context/CardContextProvider';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            
        <img src={productData.image} style={{width: "200px"}} alt='product' />
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
           <Link to={`/products/${productData.id}`}>Details</Link>

            <div>
            {quantitiyCount(state, productData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantitiyCount(state, productData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashicon} alt="trash" style={{width: "20px"}} /></button>}
                    {
                        easeIncart(state, productData.id) ?
                        <button onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
            </div>

        </div>


        </div>
    );
};

export default Product;