import React, { useState } from 'react'
import { Input } from '../../general/Input'
import './styles.scss'
  

export const NewRecipeForm = () => {
    class Step {
        constructor(number, imageURL, description) {
            this.number = number
            this.imagesURL = imageURL
            this.description = description
        }
    }

    const [recipeInfo, setRecieInfo] = useState({
        title: "",
        type: "",
        description: "",
        imageURL: "",
        preparingTime: "",
        numbersOfSteps: "",
        steps: [],
    })

    const handleChange = (changebleValue, newValue) => {
        setRecieInfo((current) => {
            current[changebleValue] = newValue
            return current
        })
    }
   
    const addStep = (step)=>{
        setRecieInfo(current=>{
            current.steps.push(step)
            return current
        })
    }

    const deleteStep = (num)=>{
        setRecieInfo(current=>{
            current.steps.filter(item=>{
                return item.number !== num
            })
            return current
        })
    }
    
 

    return (
        <div className='recipe-form'>
            <h1 className="recipe-form__title">Новый рецепт</h1>
            <h2 className="recipe-form__subtitle">Главная информация</h2>
            <div className="recipe-form__inner">
                <div className="recipe-form__info">
                    <div className="recipe-form__input">
                        {/* <p className="recipe-form__input-name">Название рецепта: </p> */}
                        <Input />
                    </div>
                    <div className="recipe-form__input">
                        {/* <p className="recipe-form__input-name">Тип блюда :</p> */}
                        <Input />
                    </div>
                    <div className="recipe-form__input">
                        {/* <p className="recipe-form__input-name">Примерное время приготовления: </p> */}
                        <Input />
                    </div>
                    <div className="recipe-form__input">
                        {/* <p className="recipe-form__input-name">Мини-описание: </p> */}
                        <Input />
                    </div>
                </div>
                <img className="recipe-form__avatar" src="./images/default-hat-2.jpg" alt=""  />
            </div>
        </div>
    )
}
