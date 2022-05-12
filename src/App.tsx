import React from 'react';
import DayView, { Meal } from './components/DayView';

const meals: Meal[] = [
  {
    mealName: "breakfast",
    food: [
      {
        name: "Milk",
        quantity: 200,
        unitOfMeasure: 'ml'
      },
      {
        name: "Biscuits",
        quantity: 50,
        unitOfMeasure: 'gr'
      },
    ]
  },
  {
    mealName: "lunch",
    food: [
      {
        name: "Pasta",
        quantity: 100,
        unitOfMeasure: 'gr'
      },
      {
        name: "Tomato sauce",
        quantity: 200,
        unitOfMeasure: 'gr'
      },
    ]
  },
  {
    mealName: "dinner",
    food: []
  }
];


function App() {
  return (
      <div className="App">
        <DayView meals={meals} day={new Date()}/>
      </div>
  );
}

export default App;
