import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GrCircleInformation } from 'react-icons/gr';
import products from '../data/ProductData';

function ProductDetail() {
	const { id } = useParams();
	const [items, setItems] = useState(products);

	// useEffect(() => {
	// 	async function fetchProduct() {
	// 		const { data } = await axios.get(`/api/products/${id}`);
	// 		setProduct(data);
	// 	}
	// 	fetchProduct();
	// }, []);

	console.log(products);

	const product = items.find((item) => item._id === id);

	let [qty, setQty] = useState(1);

	const handleDecrease = () => {
		if (qty > 1) {
			qty -= 1;
			setQty(qty);
		}
	};

	const handleIncrease = () => {
		if (qty < product.countInStock) {
			qty += 1;
			setQty(qty);
		}
	};

	return (
		<section className="w-full lg:w-[1200px] mx-auto my-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 py-2 px-4 lg:px-2 cursor-pointer justify-center">
			<div className="mb-8 md:flex md:justify-center px-1">
				<img
					className="lg:w-[600px] lg:h-[520px] h-[450px] md:h-[700px] w-screen object-cover rounded-md"
					src={product.image}
					alt=""
				/>
			</div>
			<main className="md:px-6 lg:ml-2">
				<h1 className="text-3xl font-bold uppercase">
					{product.title}
					<span className="text-2xl font-medium"> ({product.flavour})</span>
				</h1>
				<h2 className="text-2xl font-semibold mt-2 mb-3">
					Rs. {product.price}
				</h2>
				<div className="flex items-center text-lg">
					<p>Status: </p>
					<span className="ml-4">
						{product.countInStock > 0
							? `In Stock (${product.countInStock} cartoons)`
							: 'Out of Stock'}
					</span>
				</div>
				<div className="mt-8"></div>
				<p className="text-red-500 mt-8">
					*quantity is measured in cartoons.
					<span className="block md:inline lg:inline">
						&#40;1 cartoon = 12 pieces&#41;*
					</span>
				</p>
				<div className="flex items-center mb-3 mt-4">
					<div className="flex items-center">
						<button
							className={`w-[40px] lg:w-[50px] lg:h-[50px] text-center text-4xl border border-gray-300 hover:border-gray-400 cursor-pointer`}
							onClick={handleDecrease}
						>
							-
						</button>
						<div className="text-2xl mx-5">{qty}</div>
						<button
							className="w-[40px] lg:w-[50px] lg:h-[50px] text-center text-4xl border border-gray-300 hover:border-gray-400 cursor-pointer"
							onClick={handleIncrease}
						>
							+
						</button>
					</div>
					<button className="ml-8 bg-black text-white py-2 lg:py-3 px-3 lg:px-7 text-xl font-medium hover:bg-black/70">
						Add To Cart
					</button>
				</div>
				<div className="w-full my-5 text-lg text-justify">
					<div className="flex items-center mb-2">
						<GrCircleInformation size={25} />
						<span className="text-xl font-semibold ml-2">Description</span>
					</div>
					{product.description}
				</div>
			</main>
		</section>
	);
}

export default ProductDetail;
