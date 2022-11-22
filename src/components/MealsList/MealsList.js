import React from "react";
import Meal from "../Meal/meal";

export default function MealsList({ meals }){
    if (meals.length >5){
        console.log(`length = ${meals.length}`)
        // const element = document.querySelector('.meals');
        // element.style.backgroundColor = 'red';
    
        meals.map(meal => {
          const element = document.querySelector('.meals');
        
        element.style.fontSize = 'small'})
      }
    
    return (
       
        meals.map(meal => {
            
          
            return <Meal key={meal.id} meal={meal}  />
            
            // react need unique ke for each Component. at the moment they are unique, todo1 and todo2
        })


    )


}