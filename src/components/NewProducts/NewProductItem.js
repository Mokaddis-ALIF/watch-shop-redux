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
			<article class="new__card swiper-slide">
				<span class="new__tag">New</span>

				<img src={img} alt="" class="new__img" />

				<div class="new__data">
					<h3 class="new__title">{name}</h3>
					<span class="new__price">${price}</span>
				</div>

				<button class="button new__button" onClick={addToCartHandler}>
					ADD TO CART
				</button>
			</article>
		</>
	);
};

export default NewProductItem;
