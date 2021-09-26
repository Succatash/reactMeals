import React, { useState } from 'react';
import Header from './components/Layout/Header';
import CartProvider from './context/cartProvider';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	function showCartHandler() {
		setCartIsShown(true);
	}

	const closeCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={closeCartHandler} />}

			<Header onOpen={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
