import React from 'react';
import NewProductItem from './NewProductItem';
import './NewProducts.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const productData = [
	{
		id: 'p2',
		price: 250,
		name: 'Ingersoll',
		img: 'https://i.ibb.co/3WGKfNZ/featured1.png',
	},
	{
		id: 'p1',
		price: 1050,
		name: 'Jazzmaster',
		img: 'https://i.ibb.co/3WGKfNZ/featured1.png',
	},

	{
		id: 'p4',
		price: 1500,
		name: 'Spirit rose',
		img: 'https://i.ibb.co/bLsfV7h/product1.png',
	},
	{
		id: 'p3',
		price: 890,
		name: 'Rose gold',
		img: 'https://i.ibb.co/41bf5b3/featured3.png',
	},

	{
		id: 'p6',
		price: 870,
		name: 'Jubilee black',
		img: 'https://i.ibb.co/bLsfV7h/product1.png',
	},
	{
		id: 'p5',
		price: 1350,
		name: 'Khaki pilot',
		img: 'https://i.ibb.co/bLsfV7h/product1.png',
	},
];

const NewProducts = () => {
	return (
		<>
			<section class="new section container" id="new">
				<h2 class="section__title">New Arrivals</h2>

				<div class="new__container">
					<div class="swiper new-swiper">
						<Swiper
							slidesPerView={3}
							spaceBetween={30}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							className="mySwiper"
						>
							{productData.map((product) => (
								<SwiperSlide>
									<NewProductItem key={product.id} product={product} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default NewProducts;
