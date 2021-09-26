import React, { useContext, useState, useEffect } from 'react';

import Style from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import cartContext from '../../context/cart-context';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(cartContext);
	const [btnHighlighted, setBtnHighlighted] = useState(false);

	const numbersInCartItems = cartCtx.items.reduce((curNumber, item) => {
		let num = curNumber + item.amount;
		return num;
	}, 0);

	useEffect(() => {
		if (cartCtx.items.length === 0) {
			return;
		} else {
			setBtnHighlighted(true);
		}
	}, []);

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
