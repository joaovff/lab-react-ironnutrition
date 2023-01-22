import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [showFoods, setFoods] = useState(foods);
  const [filteredFoods, setFiltered] = useState(foods);
  function handleNewFood(newFood) {
    setFiltered(filteredFoods.concat(newFood));
  }

  function handleFilteredFoods(keyword) {
    const filtered = showFoods.filter((foods) => {
      return foods.name.toLowerCase().includes(keyword.toLowerCase());
    });

    setFiltered(filtered);
  }

  function handleDeleteFood(foodName) {
    const filtered = filteredFoods.filter((food) => {
      return food.name !== foodName;
    });
    setFiltered(filtered);
  }

  return (
    <div className="App">
      <AddFoodForm addFood={handleNewFood} />
      <Search handleFilteredFoods={handleFilteredFoods} />
      <FoodBox handleDeleteFood={handleDeleteFood} food={filteredFoods} />
    </div>
  );
}

export default App;
