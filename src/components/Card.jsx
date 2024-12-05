import { Category } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';

const Card = ({cart,item,setCart}) => {
  let[change,setChange]=useState(false);

  const cut =(item)=>{
    let del= cart.filter((e)=>e.id!=item.id)
    setCart(del);
    setChange(false);
  }

  const addCard = (item) => {
    let result= cart.find((e)=> e.id===item.id);

    if(result){
      alert("ITEM ALREADY ADDED");
    }
    else{
      // let data ={
      //   id:item.id,
      //   title:item.title,
      //   image:item.image,
      //   description:item.description,
      //   category:item.category,
      //   price:item.price,
      //   quantity:1

      // }
      // console.log(data);    

      setCart([...cart,{...item, quantity:1}]);
      setChange(true);

    }
  }
  return (
    <div className='flex justify-center'>
          <div className='flex-cols justify-between w-[280px] mt-8 mb-12  rounded-md shadow-lg '>
            <div className='text-center'>
              <img src={item.image} alt='Image' className='h-48 w-full rounded-md object-contain'></img>
            </div>
            <div className='p-4 text-center '>
                <p className='mb-2'>{item.title}</p>
                <p style={{ fontWeight: "700" }}> Price : ₹ {Math.round(item.price)}</p>
                {change?<button onClick={()=>cut(item)} className='bg-[blue] text-white px-6 rounded-md py-2 mt-2'>Remove</button>:<button onClick={()=>addCard(item)} className='bg-[blue] text-white px-6 rounded-md py-2 mt-2'>ADD</button> }
                {/* <button onClick={()=>addCard(item)} className='bg-[blue] text-white px-6 rounded-md py-2 mt-2'>ADD</button> */}
            </div>
          </div>
     </div>


  );
};

export default Card;