import React from 'react';
import { ProductContext } from '../Context/Contextproductprovider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
const id = props.match.params.id;
const data = useContext(ProductContext);
const product =data[id];
const {image, title, description, price, category} = product;

    return (
        <div>
            <img src={image} />
            <h3>title</h3>
            <p>{description}</p>
            <p>{category}</p>
            <div>
                <span>{price}</span>
                <Link to="/">Back to HomePage</Link>
            </div>
        </div>
    );
};

export default ProductDetails;