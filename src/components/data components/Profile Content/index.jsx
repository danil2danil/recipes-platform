import React from 'react'
import { useState } from 'react'
import './style.scss'
import { BsJournalPlus } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export const ProfileContent = () => {
	const navigate = useNavigate()
	const [recipesList, setResipesList] = useState("")
	return (
		<div className='content'>
			<div className="content__header">
				<div className="content__header-item">
					Мои рецепты
				</div>
			</div>
			<button className="content__button" onClick={()=>navigate("/newRecipe")}>
				<BsJournalPlus className="content__button-ico" />
				<p className="content__button-txt">Добавить новый рецепт</p>
			</button>
		</div>
	)
}	
