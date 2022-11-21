import React from "react";
import Meal from "../Meal/meal";

export default function MealsList({ meals }){
    return (
        meals.map(meal => {
            
            return <Meal key={meal.id} meal={meal}  />
            
            // react need unique ke for each Component. at the moment they are unique, todo1 and todo2
        })


    )


}