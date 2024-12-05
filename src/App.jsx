import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'

function App() {
let [cart,setCart]=useState([]);
// let plus = (product, update) => {
//   console.log(product);
//   console.log(update);
//   setCart(
//       cart.map((item) =>
//           item.id == product.id ? { ...item, update } : item
//       ));
// }
  return (
    <div>
       <Navbar cart={cart}/>
       <Routes>
        <Route path='/' element={<Home cart={cart}  setCart={setCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>

       </Routes>

    </div>
    
  )
}

export default App
