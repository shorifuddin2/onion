import React from 'react';
import logo from '../../Assets/images/logo2.png';
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navber = () => {
    return (
        <nav className='bg-white sticky top-0'>
            <div className="container mx-auto py-4 flex justify-between">
                <div className="image-section">
                    <img className='w-1/4' src={logo} alt="" />
                </div>
                <div className="icon-section flex items-center">
                    <AiOutlineShoppingCart className='ml-5 bg-red-500 text-white rounded-full h-6 w-6 cursor-pointer'></AiOutlineShoppingCart>
                    <button className='btn ml-5 font-medium'>Login</button>
                    <button className='bg-red-500 py-1 px-5 rounded-full text-white ml-5'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navber;