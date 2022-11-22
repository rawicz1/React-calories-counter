
import React, { useState, useRef } from 'react';
import './App.css';
import  Today  from './components/today/today'
import { v4 as uuidv4 } from 'uuid' 
import { render } from '@testing-library/react';
import MealsList from '../src/components/MealsList/MealsList'


function App() {
  const [caloriesToday, setCaloriesToday] = useState(0)
  const [meals, setMeals] = useState([])
  // const [fontSize, setFontSize] = ('2em')
  
  const countRef = useRef()
  const mealRef = useRef()

  const addCaloriesToday = () => {
    const count = countRef.current.value    
    if(!count) {
      alert ('Not a number'); 
      return;}
    setCaloriesToday(prevCount => prevCount + Number(count) );
    countRef.current.value=null
    
    addMeal(count);
   
    };

  const addMeal = (count) => {
    const name = mealRef.current.value; 
    setMeals(prevMeals => [...prevMeals, 
      {name: name, id: uuidv4(), count: count}]
    )
    mealRef.current.value =null
  }
  // const changeFont = () => {
  //   setFontSize('1em')
  // }
   
  const reset = () => {   
    setCaloriesToday(0);
    setMeals([])
  }
  return (
    <div className="App">
      
        <Today  count={caloriesToday} meals={meals} />
        <div className='input_fields' > <input type='text' ref={mealRef} placeholder='meal' />
       
        <input type='number' ref={countRef} placeholder='kcal' />
        <br></br>
        <button className='add' onClick={addCaloriesToday} >Add</button> </div>
        
        <div className='meals' ><p>Meals:</p><MealsList meals={meals} /> </div>  
         
        <button className='reset' onClick={reset}>Reset</button>
        
        
    </div>
  );
};

export default App;
