import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const DiscoverItem = ({ product }) => {
	const dispatch = useDispatch();

	const { img, name, price, id } = product;

	const addToCartHandler = () => {
		dispatch(cartActions.addItemToCart({ id, name, price, img }));
	};

	return (
		<>
			<article className="products__card">
				<img src={img} alt="" className="products__img" />

				<h3 className="products__title">{name}</h3>
				<span className="products__price">${price}</span>

				<button className="products__button" onClick={addToCartHandler}>
					<BiShoppingBag />
				</button>
			</article>
		</>
	);
};

export default DiscoverItem;
