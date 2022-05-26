import useMeals from '../../../../Hooks/useMeals';
import SingleMealCard from '../SingleMealCard';

const Dinner = () => {
    const { dinner } = useMeals([])
    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
            {
                dinner.map(singleDinner => <SingleMealCard key={singleDinner.id} singleMeal={singleDinner}></SingleMealCard>)
            }
        </div>
    );
};

export default Dinner;