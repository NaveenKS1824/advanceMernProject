import { createSlice } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addCart:(state,action)=>{
            state.cart.push({...action.payload,quantity:1});
        },
        incrementItem:(state,action)=>{
            // const selected = state.cart.find((cart)=>(cart.id===action.payload.id));
            // selected.quantity+=1;
            state.cart = state.cart.map((item)=>(
                (action.payload.id===item.id?({...item,quantity:item.quantity+1}):item)
            ))
        },
        decrementItem:(state,action)=>{
            state.cart=state.cart.map((item)=>(
                (action.payload.id===item.id)?({...item,quantity:item.quantity-1}):item))
        },
        removeItem:(state,action)=>{
            state.cart= state.cart.filter((item)=>((action.payload.id!==item.id)))
        }
    }
})

export const {addCart,incrementItem,decrementItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;