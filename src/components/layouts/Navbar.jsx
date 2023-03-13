import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	FaBars,
	FaTimes,
	FaFacebook,
	FaInstagram,
	FaPhoneAlt,
} from 'react-icons/fa';
import { HiOutlineMail, HiShoppingCart } from 'react-icons/hi';
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
						to="/about"
					>
						About
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
						</div>
					</Link>
				</li>
			</ul>
			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-red-500">
						<a
							className="flex justify-between items-center w-full text-white"
							href="tel:+9779826747001"
							target="_blank"
						>
							Phone <FaPhoneAlt size={28} color="white" />
						</a>
					</li>
					<li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#333]">
						<a
							className="flex justify-between items-center w-full text-white"
							href="mailto: greencitynp@gmail.com"
							target="_blank"
						>
							Email <HiOutlineMail size={30} color="white" />
						</a>
					</li>
					<li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://www.linkedin.com/in/namgel-lama-9b2164193/"
							target="_blank"
						>
							Instagram
							<FaInstagram size={30} color="white" />
						</a>
					</li>
					<li className="w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
						<a
							className="flex justify-between items-center w-full text-white"
							href="https://www.facebook.com/profile.php?id=100089835586096"
							target="_blank"
						>
							<span className="pr-3">Facebook</span>{' '}
							<FaFacebook size={30} color="white" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
