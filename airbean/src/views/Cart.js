import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/cart.css';



function Cart() {
    const cart = useSelector((state) => { return state.cart });
    var cartTotal = 0;
    cart.forEach(cartProduct => {
        cartTotal = cartTotal + parseInt(cartProduct.product.price);
    });
    const handleClick = () => {
        //fetch post

    }


    return (
        <div className='container cart '>
            {cart.map((cartProduct) => {
                return <div key={cartProduct.product.id}>
                    <h2 >{cartProduct.product.title}</h2>
                    <p>{cartProduct.product.price}kr</p>
                </div>
            })}
            <h1>Total: {cartTotal}</h1>
            <p>inkl. moms + drönarleverans</p>

            <Link onClick={handleClick} to='/status'>
                <div className='confirm'>
                    <h2>Take my money!</h2>
                </div>
            </Link>
        </div>
    );
}

export default Cart;