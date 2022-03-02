import React from 'react';
import './Cart.css';
import f1 from '../../assets/img/featured1.png';
import { GrClose } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = ({ sidebar, closeSidebar }) => {
	const cartItems = useSelector((state) => state.cart.items);
	console.log(cartItems);

	const price = cartItems.reduce((prev, curr) => prev + curr.totalPrice, 0);

	return (
		<div className={sidebar ? 'cart cart--open' : 'cart'}>
			<div onClick={closeSidebar}>
				<GrClose className="cart__close" />
			</div>
			<h2 className="cart__title-center">My Cart</h2>

			<div className="cart__container">
				{cartItems.map((cart) => (
					<CartItem key={cart.id} cart={cart} />
				))}
			</div>

			<div className="cart__prices">
				<span className="cart__prices-item">{cartItems.length} items</span>
				<span className="cart__prices-total">${price}</span>
			</div>
		</div>
	);
};

export default Cart;
