import React, { useMemo } from 'react';
import{useSelector} from 'react-redux';
import './cartItem.css';
import { useState } from 'react';
import CartCard from './CartCard';
import { useEffect } from 'react';
function CartItem(props) {
    const cartItem = useSelector((state)=>state.cart.cart);
    const unique = [...new Set(cartItem)];
    const [amt ,setAmt ] = useState(0);
    const quantity = cartItem.length;
    const total1 =useMemo(()=>{
        let sum=0;
        cartItem.forEach((e)=>{
            sum+=(e.price*e.quantity);
        })
        return(sum);
    },[cartItem]);
    console.log(cartItem);
    const total = Math.ceil(total1); 
    return (
        <>
        <div className='cartmainContainer'>
            <div className='cartContainer' style={{marginTop:"20px"}}>
            {unique.map((a)=>{
                    return(
                        <CartCard a={a}/>
                        )})}
            </div>
            <div className="totalContainer">
                <div className="imgTotal"><img src='https://imgs.search.brave.com/wwK25d5Qcm62jgpeLMU3D4LOpdF5sLTpgQmfoYdNiCA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9vLVhqclZtLThf/U0Z0WkJYdGNmV2Nm/bFg2QUk9LzB4MDox/MDAweDEwMDAvZml0/LWluLzUwMHg1MDAv/cHJvamVjdHMtZmls/ZXMvMTAxLzEwMTI2/LzEwMTI2MzEvMWI3/MGE4OWYtZGYyYy00/MjU3LWI3ZjEtOTRi/OWFhMDJhNDQ4Lmpw/Zw'/></div>
                <div className="header">
                    Price Details
                </div>
                <div className="sub-total">
                    SubTotal: <div className="" style={{paddingLeft:"78px" ,fontWeight:"700"}}>₹ {total}</div>
                </div>
                <div className="itemCount">
                    Delivery Charge:<div className="" style={{paddingLeft:"20px", fontWeight:"700"}}>₹ {10*quantity}</div>
                </div>
                <div className="total">Total Amount:<div className="" style={{paddingLeft:"40px",fontWeight:"700"}}>₹ {total+(10*quantity)}</div></div>
            </div>
        </div>
        </>
    );
}

export default CartItem;