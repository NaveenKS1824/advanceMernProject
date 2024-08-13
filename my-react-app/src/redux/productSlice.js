import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../constants";

const productSlice = createSlice({
    name:"Products",
    initialState:{
        product:[],
    },
    reducers:{
        setProduct:(state,action)=>{
            state.product=action.payload;
        },
        searchItem:(state,action)=>{
            if(action.payload==''){
                state.product=PRODUCTS;
            }
            else{
                state.product= PRODUCTS.filter((item)=>item.title.toLowerCase().includes(action.payload.toLowerCase()));
            }
        }
    }
});
export const {searchItem,setProduct} = productSlice.actions;
export default productSlice.reducer;