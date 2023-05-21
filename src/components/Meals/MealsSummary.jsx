import React from 'react'
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
        <h2 className={classes.h2}>Delicious Food, Deliever To You</h2>
        <p>
            Select yuor favourite meal from our broad selection of available meals 
            and enjoy delecious lunch or dinner at your home
        </p>
        <p>
            All our meals are cooked with high-quality ingredients, just-in-time and 
            ofcoursed by expericed cooks!
        </p>
    </section>
  )
}

export default MealsSummary