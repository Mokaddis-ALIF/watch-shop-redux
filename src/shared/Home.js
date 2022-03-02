import React, { useState } from 'react';
import Backdrop from '../components/Cart/Backdrop';
import Cart from '../components/Cart/Cart';
import Featured from '../components/Featured/Featured';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Products from '../components/Products/Products';
import Story from '../components/Story/Story';
import Header from '../components/Header/Header';
import NewProducts from '../components/NewProducts/NewProducts';

const Home = () => {
	const [sidebar, setSidebar] = useState(false);

	const toggleSidebar = () => {
		setSidebar((prevState) => !prevState);
	};

	return (
		<>
			<Header openSidebar={toggleSidebar} />

			<Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
			<Cart sidebar={sidebar} closeSidebar={() => setSidebar(false)} />
			<HomeBanner />
			<Featured />
			<Story />
			<Products />
			<NewProducts />
			<NewsLetter />
		</>
	);
};

export default Home;
