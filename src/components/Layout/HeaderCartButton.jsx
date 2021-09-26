import React, { useContext, useState, useEffect } from 'react';

import Style from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import cartContext from '../../context/cart-context';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(cartContext);
	const [btnHighlighted, setBtnHighlighted] = useState(false);

	const { items } = cartCtx;

	const numbersInCartItems = items.reduce((curNumber, item) => {
		let num = curNumber + item.amount;
		return num;
	}, 0);

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnHighlighted(true);
		const timer = setTimeout(() => setBtnHighlighted(false), 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	const btnClasses = `${Style.button} ${btnHighlighted ? Style.bump : ''}`;
	return (
		<>
			<button className={btnClasses} type='submit' onClick={props.onClick}>
				<CartIcon className={Style.icon} />
				<span>Your Cart</span>
				<span className={Style.badge}>{numbersInCartItems}</span>
			</button>
		</>
	);
};

export default HeaderCartButton;
