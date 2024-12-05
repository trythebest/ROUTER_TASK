import React, { useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';

function Cart({ cart, setCart }) {
      const [quantity,setQuantity]=useState(1);

    
    const calculateTotal = () => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return total - total * 0.1; // Apply 10% discount
      };
    
      let removeCart= (item)=>{
        setCart(
            cart.filter((e)=>e.id!==item)
        )
    }

    const updateQuantity = (productId, quantity) => {
        setCart(
          cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          )
        );
      };

    // let plus = (product) => {
    //     setCart(()=>{
    //         const data = cart.findIndex((item)=> item.id === product.id )
    //         console.log(data);

    //         if(data != -1){
    //         // const update=[...cart]
    //         // // console.log(update);
    //         cart[data].quantity += 1;
    //         // console.log(cart);
    //         return cart.quantity
    //         }
    //         else{
    //             console.log(product)
    //         }
    //     }
    //     )
    //     console.log(cart);
       
       
       

    // }



    return (
        <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <IoCartOutline className="text-3xl mr-2" />
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 object-contain mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-gray-700 text-sm">${item.price.toFixed(2)}</p>
                    <p className="text-gray-700 text-sm">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-l"
                  >
                    −
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 ml-4 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-lg font-bold">
              Total Price (after 10% discount): ${calculateTotal().toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>

    );
}

export default Cart;