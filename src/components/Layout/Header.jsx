import React, { useEffect } from 'react';

import HeaderCartButton from '../Layout/HeaderCartButton';
import image from '../../public/images/meals.jpg';
import style from './Header.module.css';

const Header = (props) => {
	return (
		<>
			<header className={style.header}>
				<h1>ReactMeals</h1>

				<HeaderCartButton onClick={props.onOpen} type='Submit' />
			</header>
			<div className={style['main-image']}>
				<img src={image} alt='Image of Italian food I will cook for you' />
			</div>
		</>
	);
};

export default Header;
