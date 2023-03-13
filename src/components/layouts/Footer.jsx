import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer px-5 py-4 lg:py-3 bg-white text-black text-center shadow-2xl font-medium">
			<p className="text-lg">Copyright &copy; {footerYear}, GreenCity</p>
			<div className="lg:hidden flex justify-center items-center mt-3">
				<a href="tel:+9779826747001" target="_blank" className="mx-2">
					<FaPhoneAlt size={28} />
				</a>
				<a
					href="mailto: greencitynp@gmail.com"
					target="_blank"
					className="mx-2"
				>
					<HiOutlineMail size={30} />
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=100089835586096"
					target="_blank"
					className="mx-2"
				>
					<FaFacebook size={30} />
				</a>
				<a
					href="https://www.instagram.com/greencity_np/"
					target="_blank"
					className="mx-2"
				>
					<FaInstagram size={30} />
				</a>
			</div>
			<p className="text-sm text-gray-500 mt-3 lg:mt-1">
				Developed by Namgel Lama
			</p>
		</footer>
	);
}

export default Footer;
