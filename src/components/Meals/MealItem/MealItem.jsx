import React, { useContext } from 'react';
import cartContext from '../../../context/cart-context';
import Card from '../../UI/Card';
import style from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;

	const cartCtx = useContext(cartContext);

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};

	return (
		<li>
			<Card>
				<h3>{props.name}</h3>
				<div className={style.description}>{props.description}</div>
				<div className={style.price}>{price}</div>
				<div>
					<MealItemForm onAddToCart={addToCartHandler} id={props.id} />
				</div>
			</Card>
		</li>
	);
};

export default MealItem;
