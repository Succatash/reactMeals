import React, { useState, useRef } from 'react';

import Input from '../../Ui/Input';

import style from './MealItemForm.module.css';

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);

	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;

		const enterAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmount < 1 ||
			enterAmountNumber > 5
		) {
			setAmountIsValid(false);
		} else if (
			(amountIsValid === false && enteredAmount > 0 && enterAmount < 6) ||
			(false && enterAmountNumber > 0 && enterAmountNumber < 6)
		) {
			setAmountIsValid(true);
		}

		const addCartNumber = (num) => {
			if (num > 0 && num < 6) {
				return num;
			} else return null;
		};

		props.onAddToCart(addCartNumber(enterAmountNumber));
	};

	return (
		<form className={style.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label='Amount: '
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '0',
					max: '7',
					step: '1',
					defaultValue: '1',
				}}
			/>

			<button>+Add</button>

			{!amountIsValid && <p>Please set Valid amount</p>}
		</form>
	);
};

export default MealItemForm;
