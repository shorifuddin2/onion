import { useEffect, useState } from "react";

const useMeals = () => {
    const [meals, setMeals] = useState([]);
    const breakfast = meals.filter(meal => meal['catagory'] === 'breakfast');
    const lunch = meals.filter(meal => meal['catagory'] === 'lunch');
    const dinner = meals.filter(meal => meal['catagory'] === 'dinner');
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])

    
    return { meals, breakfast, lunch, dinner };
};

export default useMeals;