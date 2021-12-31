import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import airBean from '../assets/graphics/airbean-landing.svg';
import floralLeft from '../assets/graphics/intro-graphic-left.svg';
import floralRight from '../assets/graphics/intro-graphic-right.svg';


import '../assets/css/landing.css';

function Landing() {
    

    return (
        <div className='container landing'>
            <img src={floralLeft} className='floral-left' />
            <Link to='/menu'><img className='logo' src={airBean} /> </Link>
            <img src={floralRight} className='floral-right' />


        </div >
    );
}

export default Landing;