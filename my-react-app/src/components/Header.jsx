import React, { useState } from 'react';
import './header.css';
import { useSelector } from 'react-redux';
import {  Link,Navigate } from 'react-router-dom';
import CartItem from './CartItem';
function Header(props) {
    const count = useSelector((state)=>
        state.counter.count
    );
    const cartlen = useSelector((state)=>
        state.cart.cart
    )
    return (
        <div className='mainHeader'>
            <div className="logoHeader">
                <h3>LOGO</h3>
            </div>
            <div className="remaining">
                <Link to={"/"}><h3>Products</h3></Link>
                <h3>About</h3>
                <Link to={"/cart"}><h3>Card:{cartlen.length}</h3></Link>
                <h3>second cart: {count}</h3>
            </div>
        </div>
    );
}

export default Header;