import React, { useEffect, useState } from 'react';
import { PRODUCTS } from '../constants';
import './products.css';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/counterSlice';
import { addCart, incrementItem } from '../redux/cartSlice';
import ProductsItem from './ProductsItem';
import axios from 'axios';
import { setProduct } from '../redux/productSlice';


const Products=(props)=> {
    const dispatch = useDispatch();
    const [search,setSearch]=useState('');
    useEffect(()=>{
        getProduct();
    },[]);

    const getProduct = async()=>{
        const res = await axios.get("http://localhost:3000/api/getProducts");
        console.log(res.data);
        dispatch(setProduct(res.data));
    }
    const list = useSelector((state)=>state.productItem.product);
    const len = (list.length===0)?0:1;
    return (
        <div>
            <h1>Products</h1>
            <SearchBar search={search} setSearch={setSearch}/>
            <div className='mainContainer'>
            {(len)?(list.map((a)=><ProductsItem a={a}/>)):(<h3>No Item Found Bro</h3>)}
            </div>
            
        </div>
    );
}

export default Products;