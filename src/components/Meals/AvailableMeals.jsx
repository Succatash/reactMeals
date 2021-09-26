import React,{useContext} from 'react'
import Meals from '../../public/dummy-meals'
import Card from '../UI/Card'


import MealItem from './MealItem/MealItem' 
import Style from './AvailableMeals.module.css'


// import MealItemForm from './MealItem/MealItemForm'


function AvailableMeals() {


  const MealList = Meals.map(meal=> {return <MealItem id={meal.id}
  key={meal.id} 
  description={meal.description} 
  name={meal.name}
   price={meal.price}/>

    })
    
  return (
    <> 
    <section className={Style.meals} >

      
    <ul>{MealList }</ul>
    
    </section>
      
    </>
  )
}

export default AvailableMeals
