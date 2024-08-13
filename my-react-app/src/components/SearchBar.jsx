import React, { useState } from 'react';
import './searchbar.css'
import { useDispatch } from 'react-redux';
import { searchItem } from '../redux/productSlice';
function SearchBar(props) {
    const dispatch = useDispatch();
    const [summa,setSumma]=useState('');
    const handleInput = (e) =>{
        setSumma(e.target.value);
    }
    const handleButton = () =>{
        dispatch(searchItem(summa));
    }
    return (
        <div className='mainSearch'>
            <input type="text" placeholder='Search' value={summa} onChange={handleInput}/>
            <button onClick={handleButton}>search</button>
        </div>
    );
}

export default SearchBar;