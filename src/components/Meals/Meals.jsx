import React, { Component } from 'react'
import AvailableMeals from './AvailableMeals'
import MealSummary from './MealSummary'


export class Meals extends Component {
  render() {
    return (
      <>
      <MealSummary/>
      <AvailableMeals/>
      </>
    )
  }
}

export default Meals
