import React from 'react'

export const ProfileRecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
      <img 
        className='recipe-card__img'
        src=''
        alt='resipe-card__img'
       />
      <div className="recipe-card__inner">
        <h3 className="recipe-card__title">
        </h3>
        <div className="recipe-card__info">
          <div className="recipe-card__time"></div>
          <div className="recipe-card__type"></div>
          <div className="recipe-card__servings"></div>
        </div>
      </div>
    </div>
  )
}
