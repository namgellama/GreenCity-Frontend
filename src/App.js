import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/products/" element={<ProductPage />} />
				<Route path="/products/:id" element={<ProductDetail />} />
				<Route path="/contact/" element={<ContactPage />} />
				<Route path="/cart/" element={<CartPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
