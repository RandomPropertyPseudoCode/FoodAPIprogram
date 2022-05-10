import './calc.css';
import React from 'react'
import { useState } from 'react';

export const Calculate = () => {
  const APP_KEY = "b2b16702b0cc4b9afa4ec2d93d6b108e";
  const APP_ID = "8c550b42";

  const [searchTerm, SetSearchTerm] = useState('');
  const [foodState, setFoodState] = useState([]);

  const getData = async () => {
    fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=%20${APP_KEY}&ingr=${searchTerm}&nutrition-type=cooking`)
      .then(res => res.json())
      .then(json => {
        setFoodState(json.hints);
      });
  }
  const onSubmit = (event) => {
    event.preventDefault();
    getData();
  };
  const onChange = (event) => {
    SetSearchTerm(event.target.value);
  }

  return (
    <div className='search-area'>

      <form className="searchBar" onSubmit={onSubmit} style={{ marginBottom: "2em" }}>
        <input className='form__input' type="text" placeholder='search food' onChange={onChange} />
        <button className='form__button'>Search now!</button>
      </form>

      <div className="container">
        {
          foodState.map(foodState => <div key={foodState.food.foodID}>

            <div className="col-md-3">
              <div className="recipes__box">
                <img className='calc__img' width="250" src={foodState.food.image} alt={foodState.food.label} />
                <h4 className='food__title'>{foodState.food.label}</h4>
                <div>Calories: {foodState.food.nutrients.ENERC_KCAL} kcal</div>
                <div>Protein: {foodState.food.nutrients.PROCNT} g</div>
                <div>Fat: {foodState.food.nutrients.FAT} g</div>
                <div>Carbohydrate: {foodState.food.nutrients.CHOCDF} g</div>
                <div>Fiber: {foodState.food.nutrients.FIBTG} g</div>
              </div>
            </div>
          </div>
          )}
      </div>
    </div>
  )
}
