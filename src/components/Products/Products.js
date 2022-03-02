import React from 'react';
import './Products.css';

import ProductItem from './ProductItem';

const productData = [
	{
		id: 'p1',
		price: 1050,
		name: 'Jazzmaster',
		img: 'https://i.ibb.co/3WGKfNZ/featured1.png',
	},
	{
		id: 'p2',
		price: 250,
		name: 'Ingersoll',
		img: 'https://i.ibb.co/3WGKfNZ/featured1.png',
	},
	{
		id: 'p3',
		price: 890,
		name: 'Rose gold',
		img: 'https://i.ibb.co/41bf5b3/featured3.png',
	},
	{
		id: 'p4',
		price: 1500,
		name: 'Spirit rose',
		img: 'https://i.ibb.co/bLsfV7h/product1.png',
	},
	{
		id: 'p5',
		price: 1350,
		name: 'Khaki pilot',
		img: 'https://i.ibb.co/bLsfV7h/product1.png',
	},
	{
		id: 'p6',
		price: 870,
		name: 'Jubilee black',
		img: 'https://i.ibb.co/bLsfV7h/product1.png',
	},
];

const Products = () => {
	return (
		<>
			<section className="products section container" id="products">
				<h2 className="section__title">Products</h2>

				<div className="products__container grid">
					{productData.map((product) => (
						<ProductItem product={product} id={product.id} />
					))}
				</div>
			</section>
		</>
	);
};

export default Products;
