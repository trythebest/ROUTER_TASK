import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


const Navbar = ({cart}) => {
   const val = cart.reduce((acc, item)=> acc + item.quantity, 0 );
    const navigate = useNavigate();
    return (
        <div className='bg-[#2874F0] px-8 text-white flex justify-between items-center h-[60px] sm:w-full sticky top-0'>
            <div>
                <h3>FlipKart</h3>
            </div>
            <div>
                <ShoppingCartIcon className='hover:cursor-pointer' onClick={()=>navigate("/cart")} /> <span className='absolute top-2  text-xl bg-red-600 rounded-md'>{val}</span>
            </div>
        </div>

    );
};

export default Navbar;