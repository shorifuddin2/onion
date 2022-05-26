import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleMealCard = ({ singleMeal }) => {
    const { img, name, details, price, id } = singleMeal;
    return (
        <div className='custom-shadow rounded-lg'>

            <div className="max-w-sm text-center">
                <Link to={`/breakfast/${id}`}>
                    <img className="rounded-t-lg w-2/3 mx-auto pt-4" src={img} alt="" />
                </Link>
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">{name}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                    <h2 className='text-xl font-bold'>Price: ${ price }</h2>

                </div>
            </div>

        </div>
    );
};

export default SingleMealCard;