import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#FCF4E0]'>
            <div className="inner flex flex-col items-center justify-center bg-banner">
                <h1 className='text-4xl font-medium mb-5'>Best Food waiting for your Belly</h1>
                <div className="input-field">
                    <input className='py-2 px-3 w-1/2 rounded-full banner-input' type="text" />
                    <button className='bg-red-500 rounded-full text-white px-8 py-2 -ml-8'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;