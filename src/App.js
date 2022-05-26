import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from './Components/Shared/Navber';
import Home from './Components/Home/Home';
import Breakfast from './Components/Shared/Meals/Breakfast';
import Lunch from './Components/Shared/Meals/Lunch/Lunch';
import Dinner from './Components/Shared/Meals/Dinner/Dinner';
import SingleMealDetails from './Components/Shared/Meals/SingleMealDetails/SingleMealDetails';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/breakfast/:id' element={<SingleMealDetails></SingleMealDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
