import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import Logo from '../../assets/logo.png';

function Navbar() {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);

	return (
		<nav className="w-full sticky top-0 bg-white text-black text-lg font-medium z-10 flex items-center justify-between py-2 pl-4 lg:pl-8 pr-8 md:flex-row md:py-1 lg:flex-row lg:py-0 shadow-lg">
			<Link to="/" className="flex items-center md:mb-2 z-10 lg:mt-1 w-full">
				<img className="w-[45px] md:mb-2 lg:mb-0" src={Logo} alt="Logo Image" />
				<div className="ml-2 mt-2">
					<h1 className="text-xl font-extrabold  text-[#9a7b4f] mb-[-7px]">
						<span className="text-green-600">Green</span>City
					</h1>
					<p className="text-[0.65rem] font-medium">Delivering excellence</p>
				</div>
			</Link>

			<div
				onClick={handleClick}
				className="absolute right-4 top-6 cursor-pointer lg:hidden hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
			>
				{!open ? (
					<FaBars size={25} className="cursor-pointer" />
				) : (
					<FaTimes size={25} className="cursor-pointer" />
				)}
			</div>

			<ul
				className={`w-full flex flex-col items-start bg-white absolute top-10 left-0 mt-3 pl-2 py-3 lg:static lg:flex lg:flex-row lg:justify-end lg:mt-0 lg:py-2 opacity-100  ${
					open ? 'top-0' : 'opacity-0 hidden'
				}`}
			>
				<li className="my-3 md:my-2 lg:mx-2 lg:mt-3" onClick={handleClick}>
					<Link className="text-black hover:text-gray-400 duration-300" to="/">
						Home
					</Link>
				</li>
				<li className="my-3 md:my-2 lg:mx-2 lg:mt-3" onClick={handleClick}>
					<Link
						className="text-black hover:text-gray-400 duration-200"
						to="/products"
					>
						Shop
					</Link>
				</li>
				<li
					className="my-3 md:mt-2 md:mb-4 lg:mx-2 lg:mt-3"
					onClick={handleClick}
				>
					<Link
						className="text-black hover:text-gray-400 duration-200"
						to="/contact"
					>
						Contact
					</Link>
				</li>
				<li
					className="my-3 md:mt-2 md:mb-4 lg:mx-2 lg:mt-3"
					onClick={handleClick}
				>
					<Link
						className="text-black hover:text-gray-400 duration-200"
						to="/cart"
					>
						<div className="flex items-center">
							<HiShoppingCart size={25} className="mr-1" />
							Cart
							{/* <p className="ml-1">({size})</p> */}
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
