import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const NewProductItem = ({ product }) => {
	const dispatch = useDispatch();

	const { img, name, price, id } = product;

	const addToCartHandler = () => {
		dispatch(cartActions.addItemToCart({ id, name, price, img }));
	};
	return (
		<>
			<article className="new__card swiper-slide">
				<span className="new__tag">New</span>

				<img src={img} alt="" className="new__img" />

				<div className="new__data">
					<h3 className="new__title">{name}</h3>
					<span className="new__price">${price}</span>
				</div>

				<button className="button new__button" onClick={addToCartHandler}>
					ADD TO CART
				</button>
			</article>
		</>
	);
};

export default NewProductItem;
