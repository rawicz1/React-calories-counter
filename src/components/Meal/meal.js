import React from "react";
import './meal.css'

export default function Meal({meal}){
    // function handleTodoClick(){
    //     toggleTodo(todo.id)
    // }
    return(
        <div>          
            <div className="mealAndCount">
                
          <p>{meal.name}</p>   <p>{meal.count}</p>
            </div>
            
            <hr />
        </div>
    )
}