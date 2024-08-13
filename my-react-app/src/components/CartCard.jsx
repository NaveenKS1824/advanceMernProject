import React, { useEffect } from 'react';
import './cartItem.css'
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { decrementItem, incrementItem, removeItem } from '../redux/cartSlice';
function CartCard({a}) {
    const cartItem = useSelector((state)=>state.cart.cart);
    const dispatch = useDispatch();
    const handleInc=(a)=>{
        dispatch(incrementItem(a));
    }
    const handleDec =(a) =>{
        dispatch(decrementItem(a))
    }
    const handleRemove=(a)=>{
        dispatch(removeItem(a));
    }
    return (
        <>
            <div className='mainCart'>
                <div className='ImageCart'>
                    <img src={a.image}/>
                </div>
                <div className='ContentCart'>
                    <h4>{a.title}</h4>
                    <h3>₹{a.quantity*a.price}</h3>
                </div>
                <div className='cardButton'>
                    <button onClick={()=>handleInc(a)}>+</button><p>{a.quantity}</p><button onClick={()=>handleDec(a)}>-</button>
                    </div>
                <div className="buttonContainer">
                    <button onClick={()=>handleRemove(a)}>remove</button>
                </div>
            </div>
        </>
    );
}

export default CartCard;