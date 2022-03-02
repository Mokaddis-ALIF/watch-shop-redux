import React from 'react';
import './Featured.css';

import FeaturedProducts from './FeaturedProducts';

const fData = [
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
];

const Featured = () => {
	return (
		<>
			<section className="featured section container" id="featured">
				<h2 className="section__title">Featured</h2>

				<div className="featured__container grid">
					{fData.map((p) => (
						<FeaturedProducts key={p.id} p={p} />
					))}
					{/* <article className="featured__card">
						<span className="featured__tag">Sale</span>

						<img src={f1} alt="" className="featured__img" />

						<div className="featured__data">
							<h3 className="featured__title">Jazzmaster</h3>
							<span className="featured__price">$1050</span>
						</div>

						<button className="button featured__button">ADD TO CART</button>
					</article> */}
				</div>
			</section>
		</>
	);
};

export default Featured;
