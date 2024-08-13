import { useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import CartItem from "./components/CartItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = ( )=>{
  const [cartItem,setCartItem]=useState([]);
  const [cart,setCart] = useState(0);
  return(
    <>
    {/* <Header cartItem={cartItem}/>
    <Products cart={cart} setcart={setCart} cartItem={cartItem} setCartItem={setCartItem}/> */}
    <BrowserRouter>
      <ToastContainer/>
      <Header/>
        <Routes>
          <Route path="/" element={<Products/>}></Route>
          <Route path="/cart" element={<CartItem/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;