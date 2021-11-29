import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../views/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Navbar.css';

const Navbar =()=> {
    const basketNumber = useSelector(state => state.basketNumber);

    return (
        <nav>
            <Container>
                <div className='nav-container'>
                    <h2>Shopping Cart</h2>
                    <div className='basket'>
                        <FontAwesomeIcon icon={faShoppingCart} className='cart-icon'/>
                        <div className='basketNumBox'>
                            <p className='basketNum'>{basketNumber}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default React.memo(Navbar);
