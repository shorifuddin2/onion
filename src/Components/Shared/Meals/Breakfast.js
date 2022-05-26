import React from 'react';
import useMeals from '../../../Hooks/useMeals';
import SingleMealCard from './SingleMealCard';

const Breakfast = () => {
    const { breakfast } = useMeals()
    return (
        <div className=' container mx-auto grid grid-cols-3 gap-10 mt-14'>
            {
                breakfast.map(singleBreakfast => <SingleMealCard key={singleBreakfast.id} singleMeal={singleBreakfast}></SingleMealCard>)
            }
        </div>
    );
};

export default Breakfast;