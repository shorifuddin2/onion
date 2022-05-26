import React from 'react';
import { useParams } from 'react-router-dom';

const SingleMealDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <div className="left-content">
                <h1 className='text-4xl font-medium'>Light Breakfast</h1>
                <p className='text-gray-600 font-sm'>Description here</p>
                <div className="btn-group flex bg-white border-2 w-fit px-5 rounded-full items-center">
                    <button className='text-3xl -mt-1'>-</button>
                    <p className='mx-4'>1</p>
                    <button className='text-2xl text-red-500 -mt-1'>+</button>
                </div>
            </div>
            <div className="right-image"></div>
        </div>
    );
};

export default SingleMealDetails;