import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/status.css';
import drone from '../assets/graphics/drone.svg';
import { resetCart } from '../actions/cartActions';


function Status(props) {
    const cart = useSelector((state) => { return state.cart });

    const [data, setData] = useState('');
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetCart())

    }
    useEffect(() => {

        fetch('http://localhost:5000/api/beans', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart)
        })
            .then(response => response.json())
            .then(data => setData(data))

    }, [])


    return (
        <div className='container status'>
            <p className='ordernr'>Ordernummer: #{data.orderNr}</p>
            <img src={drone} className='drone' />
            <h1 className='phrase'>Din beställning är påväg!</h1>
            <h2>{data.eta} minuter</h2>
            <div className='confirm'>
                <Link to='/' onClick={handleClick}>
                    <h1>Ok, cool!</h1>
                </Link>
            </div>

        </div >
    );
}

export default Status;