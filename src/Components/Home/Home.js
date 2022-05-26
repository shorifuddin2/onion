import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* Nested Route */}
            <div className="nested flex justify-center mt-10">
                <CustomLink className='mx-3 text-xl font-medium' to={"breakfast"}> Breakfast</CustomLink>
                <CustomLink className='mx-3 text-xl font-medium' to={"lunch"}> Lunch</CustomLink>
                <CustomLink className='mx-3 text-xl font-medium' to={"dinner"}> Dinner</CustomLink>
            </div>
            <Outlet />
        </div>
    );
};

export default Home;