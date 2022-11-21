import React from "react";
import './today.css' 
import MealsList from '../MealsList/MealsList'

export default function Today ( { count, meals } ){
    const date = new Date()
    const day = date.getDate()
    const month =date.getMonth() + 1
    const year = date.getFullYear()    

    return (
        <div className="todayMain">
            <div className="dateAndCount">
                <  div className="date">                    
                    {day}. {month}. {year}
                </div>
                Today's count: 
                
                <div className="countValue"> <h3>{count}</h3>  </div>
                        
            </div>

        </div>
    )
}