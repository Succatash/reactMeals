import React, { useReducer } from 'react';
import CartContext from './cart-context';
//this is to allow us to access all context api for the cart

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_CART_ITEM': {
			const updatedTotalAmount =
				state.totalAmount + action.item.amount * action.item.price;

			//this returns an index
			const existingCartIndex = state.items.findIndex(
				(item) => item.id == action.item.id
			);

			const existingCartItem = state.items[existingCartIndex];

			let updatedItems;

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + 1,
				};

				updatedItems = [...state.items];
				updatedItems[existingCartIndex] = updatedItem;
				console.log(action.item, state.items);
			} else {
				updatedItems = state.items.concat(action.item);
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		}

		case 'REMOVE_CART_ITEM': {
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.id
			);

			const existingItem = state.items[existingCartItemIndex];

			const updatedTotalAmount = state.totalAmount - existingItem.price;

			let updatedItems;

			if (existingItem.amount === 1) {
				updatedItems = state.items.filter((item) => item.id != action.id);
			} else {
				const removeItem = {
					...existingItem,
					amount: existingItem.amount - 1,
				};

				updatedItems = [...state.items];

				updatedItems[existingCartItemIndex] = removeItem;
			}
			return { items: updatedItems, totalAmount: updatedTotalAmount };
		}

		case 'RESET_CART': {
			return defaultCartState;
		}

		default:
			return defaultCartState;
	}
};

const CartProvider = (props) => {
	const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchAction({ type: 'ADD_CART_ITEM', item: item });
	};

	const removeItemFromCartHandler = (id) => {
		dispatchAction({ type: 'REMOVE_CART_ITEM', id: id });
	};

	const resetCartHandler = (item) => {
		dispatchAction({ type: 'RESET_CART', item: item });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		resetCart: resetCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
