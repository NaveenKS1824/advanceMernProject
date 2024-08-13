import React, { useEffect, useState } from 'react';
import './products.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, incrementItem } from '../redux/cartSlice';
import { increment } from '../redux/counterSlice';
import { toast } from 'react-toastify';
function ProductsItem(props) {
    const cart = useSelector((state)=> state.cart.cart)
    const change = cart.some((item)=>(item.id===props.a.id));
    console.log(change);
    const dispatch = useDispatch();
    // console.log(props.cartItem);
    const handleButton =(a)=>{
        toast.success('Items has been add to the cart');
        const find = cart.find((item)=>item.id===a.id);
        if(find){
            dispatch(incrementItem(a)); 
           
        }
        else{
        dispatch(addCart(a));

        }
         
    }
    const handleIncrement =(a)=>{
        dispatch(increment());
    }
    

    return (
        <div>
            <div className='main'>
                    <div className='ImageContainer'>
                        <img src={props.a.image}/>
                    </div>
                    <div className='Content'>
                        <h4>{props.a.title}</h4>
                        <h3>₹{props.a.price}</h3>
                        <p>{props.a.description}</p>
                    </div>
                    {(change)?(<button ><Link to={'/cart'}>Go to Cart</Link></button>):(<button onClick={()=>handleButton(props.a)}>Add to Cart</button>)}
                    <button onClick={()=>handleIncrement(props.a)}>Increment</button>
            </div>
        </div>
    );
}

export default ProductsItem;