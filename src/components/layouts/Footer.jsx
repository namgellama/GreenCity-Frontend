import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer px-5 py-3 bg-white text-black text-center shadow-2xl font-medium">
			<p>Copyright &copy; {footerYear}, GreenCity</p>
			<div className="flex justify-center items-center mt-3">
				<a href="mailto: greencitynp@gmail.com" target="_blank">
					<HiOutlineMail size={30} />
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=100089835586096"
					target="_blank"
					className="mx-4"
				>
					<FaFacebook size={30} />
				</a>
				<a
					href="https://www.linkedin.com/in/namgel-lama-9b2164193/"
					target="_blank"
				>
					<FaInstagram size={30} />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
