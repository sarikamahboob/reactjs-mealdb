import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [orders, setOrders] = useState([]);
    const handleOrders = (order) =>{
        const newOrder = [...orders, order];
        console.log(orders);
        setOrders(newOrder);
    }
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    }, []);
    return (
        <div>
            <div className="meals">
                <div className="card-meal">
                {
                    meals.map(meal => <Meal
                    key={meal.idMeal}
                    mealData = {meal}
                    handleOrders={handleOrders}
                    ></Meal> )
                }
                </div>
                <div className='cart-meal' >
                    <h1>Orders: {orders.length} </h1>
                {
                    orders.map(order =>
                    <div className="all-orders">
                        <li className='meal-name' key={order.idMeal}>{order.strMeal}</li>
                    </div> 
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default Meals;