import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import '../assets/css/menu.css';
import headersvg from '../assets/graphics/graphics-header.svg';
import footersvg from '../assets/graphics/graphics-footer.svg';
import bagsvg from '../assets/graphics/bag.svg'
import { Link } from 'react-router-dom';

function Menu() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        //fetch menu-items
        fetch('http://localhost:5000/api/beans')
            .then(response => response.json())
            .then((result) => {
                setProducts(result.menu);
            })
    }, [])


    return (
        <div className='container'>
            <header className='header' >
                <img src={headersvg} alt='pretty-leaves-header' />
                <Link to='/cart'>
                    <div className='circle bag'>
                        <img src={bagsvg} alt='+' className='bag-img' />
                    </div>
                </Link>
            </header>
            {products.map((product) => {
                return <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    desc={product.desc}
                    price={product.price} />

            })}
            <footer>
                <img src={footersvg} alt='pretty-leaves-footer' />
            </footer>
        </div>
    );
}

export default Menu;