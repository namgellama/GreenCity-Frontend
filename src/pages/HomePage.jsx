import { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedProduct from '../components/FeaturedProduct';
import Showcase from '../components/Showcase';
import products from '../data/ProductData';

function HomePage() {
	const [product, setProducts] = useState(products);

	// useEffect(() => {
	// 	async function fetchProducts() {
	// 		const { data } = await axios.get('/api/products/');
	// 		setProducts(data);
	// 	}
	// 	fetchProducts();
	// }, []);

	return (
		<>
			<Showcase />
			<FeaturedProduct product={product} />
		</>
	);
}

export default HomePage;
