import React, {useContext} from 'react';
import { CartContext } from '../Context/CardContextProvider';
import Cart from './shared/Cart';

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
                   <P><span>Total Items</span></P>     

                </div>

            }


        </div>
    );
};

export default ShopCarts;