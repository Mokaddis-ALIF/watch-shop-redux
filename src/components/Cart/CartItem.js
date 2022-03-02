import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = ({ cart }) => {
	const dispatch = useDispatch();

	const { name, price, id, quantity, img } = cart;

	const removeItemHandler = () => {
		dispatch(cartActions.removeItemFromCart(id));
	};

	const addItemHandler = () => {
		dispatch(
			cartActions.addItemToCart({
				price,
				id,
				name,
			})
		);
	};

	return (
		<>
			<article className="cart__card">
				<div className="cart__box">
					<img src={img} alt="" className="cart__img" />
				</div>

				<div className="cart__details">
					<h3 className="cart__title">{name}</h3>
					<span className="cart__price">${price}</span>

					<div className="cart__amount">
						<div className="cart__amount-content">
							<span className="cart__amount-box" onClick={removeItemHandler}>
								-
							</span>

							<span className="cart__amount-number">{quantity}</span>

							<span className="cart__amount-box" onClick={addItemHandler}>
								+
							</span>
						</div>

						<BiTrash className="cart__amount-trash" />
					</div>
				</div>
			</article>
		</>
	);
};

export default CartItem;
