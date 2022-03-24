import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meal.css';

const Meal = ({mealData, handleOrders}) => {
    const {strMealThumb, strMeal, strCategory, strArea} = mealData;
    console.log(strMealThumb);
    return (
        <div className='single-meal' >
            <img src={strMealThumb} alt=""/>
            <h3>Name: {strMeal} </h3>
            <p>Category: {strCategory} </p>
            <p>Location: {strArea} </p>
            <button onClick={()=> handleOrders(mealData)}>Order Now <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> </button>
            
        </div>
    );
};

export default Meal;