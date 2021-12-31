import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import addsvg from '../assets/graphics/add.svg';



function ProductItem({ title, desc, price, id }) {
    let chosenProduct = {};
    const dispatch = useDispatch();

    const handleClick = (e) => {
        chosenProduct = e.target.dataset;
        dispatch(addToCart(chosenProduct));
    }
    return (
        <div>
            <div className='product-item'>
                <div className='circle' >
                    <img src={addsvg} alt='+' className='plus-img'
                        onClick={handleClick}
                        data-title={title}
                        data-price={price}
                        data-amount={1}
                        data-id={id} />
                </div>
                <h2>{title}</h2><h2 className='price'> {price}kr</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default ProductItem;