import React, { useContext } from 'react';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import cartContext from '../../context/cart-context';

const Cart = (props) => {
	//need to add a handler or reducer for the add and remove button.

	const cartCtx = useContext(cartContext);
	const totalAmount = cartCtx.totalAmount.toFixed(2);

	const hasItems = cartCtx.items.length > 0;

	const resetCartHandler = cartCtx.resetCart;

	const cartRemoveItemHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartAddItemHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = (
		<ul className={style['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartRemoveItemHandler.bind(null, item.id)}
					onAdd={cartAddItemHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	return (
		<>
			<Modal onClose={props.onClose}>
				{cartItems}
				<div className={style.total}>
					<span>Total</span>
					<span>{`$${totalAmount}`}</span>
				</div>
				<div className={style.actions}>
					{hasItems && (
						<button className={style['button--alt']} onClick={resetCartHandler}>
							Reset
						</button>
					)}

					<button className={style['button--alt']} onClick={props.onClose}>
						Close
					</button>

					{hasItems && <button className={style.button}>order</button>}
				</div>
			</Modal>
		</>
	);
};
export default Cart;
