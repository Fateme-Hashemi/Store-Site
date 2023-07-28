import React, {useContext} from 'react';
import { CartContext } from '../Context/CardContextProvider';
import Cart from './shared/Cart';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ShopCarts = () => {

    const {state,dispatch} = useContext(CartContext);

    return (
        <div>
           <div>
            {state.selectedItems.map (item => <Cart key={item.id} data={item} />)}
           </div>
            {
                state.itemsCounter > 0 && 
                <div>
                  <p><span>Total Items{state.itemsCounter}</span></p>    
                  <p><span>Total Payment{state.total}</span></p>

                    <div>
                        <button onClick={()=> dispatch({type: "CHECKOUT"})}>Check out</button>
                        <button onClick={()=> dispatch({type: "CLEAR"})}>Clear</button>
                    </div>


                </div>

            }
            {
                state.checkout && <div>
                    <h3>Checked out successfully</h3>
                    <Link to="/products">Buy more</Link>
                </div>
            }
              {
                !state.checkout && state.itemsCounter === 0 && <div>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go back to shop</Link>
                </div>
            }

        </div>
    );
};

export default ShopCarts;