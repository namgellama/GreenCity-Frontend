import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';

function App() {
	return (
		<>
			<Navbar />
			<main className="min-h-[85vh] md:min-h-[90vh] lg:min-h-[82vh]">
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/products/" element={<ProductPage />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route path="/about/" element={<AboutPage />} />
					<Route path="/cart/" element={<CartPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
