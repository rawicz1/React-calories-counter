
import React, { useState, useRef } from 'react';
import './App.css';
import  Today  from './components/today/today'
import { v4 as uuidv4 } from 'uuid' 
import { render } from '@testing-library/react';
import MealsList from '../src/components/MealsList/MealsList'

let count;

function App() {
  const [caloriesToday, setCaloriesToday] = useState(0)
  const [meals, setMeals] = useState([])
  
  const countRef = useRef()
  const mealRef = useRef()
  
  count = caloriesToday;
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
  
  const reset = () => {
    render(<Day count={caloriesToday}/>)
    setCaloriesToday(0);
    setMeals([])
  }
  return (
    <div className="App">
      
        <Today  count={caloriesToday} meals={meals} />
        <div className='input_fields' ></div>
        <input type='text' ref={mealRef} placeholder='meal' />
       
        <input type='number' ref={countRef} placeholder='kcal' />
        <br></br>
        <button className='add' onClick={addCaloriesToday} >Add</button>  
        <div className='meals' ><p>Meals:</p><MealsList meals={meals} /> </div>     
        <button onClick={reset}>Reset</button>
        
        
    </div>
  );
};
function Day(){
  const date = new Date()
  const day = date.getDate()
    const month =date.getMonth() + 1
    const year = date.getFullYear()    
  return(
    <div className='prevDay'>
     Day:   {day}. {month}. {year} Total count: {count}
    </div>
  )
}

export default App;
