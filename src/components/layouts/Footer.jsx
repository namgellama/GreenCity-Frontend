function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer p-6 bg-white text-black shadow-lg text-center font-medium">
			<p>Copyright &copy; {footerYear}, GreenCity</p>
		</footer>
	);
}

export default Footer;
