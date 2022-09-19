import React from 'react'
import {MdOutlinePostAdd} from 'react-icons/md'

export const AddStepBtn = () => {
	return (
		<button className="add-btn">
			<p className="add-step__btn">Добавить шаг</p>
			<MdOutlinePostAdd className='add-step__ico'/>
		</button>
	)
}
