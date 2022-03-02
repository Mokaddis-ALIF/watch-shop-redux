import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const FeaturedProducts = (props) => {
	const dispatch = useDispatch();

	const { name, price, id, img } = props.p;

	const addToCartHandler = () => {
		dispatch(cartActions.addItemToCart({ id, name, price, img }));
	};

	return (
		<article className="featured__card">
			<span className="featured__tag">Sale</span>

			<img src={img} alt="" className="featured__img" />

			<div className="featured__data">
				<h3 className="featured__title">{name}</h3>
				<span className="featured__price">${price}</span>
			</div>

			<button className="button featured__button" onClick={addToCartHandler}>
				ADD TO CART
			</button>
		</article>
	);
};

export default FeaturedProducts;
