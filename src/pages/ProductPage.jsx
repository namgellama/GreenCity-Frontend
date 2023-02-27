import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
import products from '../data/ProductData';

function ProductPage() {
	const [product, setProduct] = useState(products);

	// useEffect(() => {
	// 	async function fetchProducts() {
	// 		const { data } = await axios.get('/api/products/');
	// 		setProducts(data);
	// 	}
	// 	fetchProducts();
	// }, []);

	return (
		<section name="products" className="w-full text-center my-4">
			<header className="my-4">
				<h1 className="text-4xl font-semibold mr-4 lg:mr-0">All Products</h1>
			</header>
			<div className="container lg:w-[1200px] mx-auto">
				<div className="container text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{product.map((item) => (
						<Link
							className="flex flex-col items-center mx-4"
							to={`/products/${item._id}`}
							key={item._id}
						>
							<Card>
								<img
									className="w-[300px] h-[300px] object-cover mb-3"
									src={item.image}
									alt={item.title}
								/>
								<div className="flex flex-col items-center mt-5">
									<h1 className="text-xl font-semibold">
										{item.title} ({item.flavour})
									</h1>
									<p className="text-xl font-semibold">Rs. {item.price}</p>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

export default ProductPage;
