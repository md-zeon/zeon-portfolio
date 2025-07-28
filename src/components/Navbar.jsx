import { useState, useEffect } from "react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import { motion } from "motion/react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["hero", "about", "skills", "education", "projects", "contact"];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetBottom = offsetTop + element.offsetHeight;

					if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollTo = (id) => {
		const section = document.getElementById(id);
		section?.scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false);
	};

	const navLinks = [
		{ name: "home", id: "hero" },
		{ name: "about", id: "about" },
		{ name: "skills", id: "skills" },
		{ name: "education", id: "education" },
		{ name: "projects", id: "projects" },
		{ name: "contact", id: "contact" },
	];

	return (
		<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='flex justify-between items-center h-16'>
				{/* Logo */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					className='text-2xl mr-2 font-bold text-gradient-primary'
				>
					Zeon.
				</motion.div>

				{/* Desktop Navigation */}
				<div className='hidden md:flex space-x-2 lg:space-x-8'>
					{navLinks.map((link, index) => (
						<motion.button
							key={link.name}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							onClick={() => scrollTo(link.id)}
							className={`capitalize lg:text-base md:text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg cursor-pointer ${
								activeSection === link.id
									? "text-primary bg-primary/10 border border-primary/20 shadow-sm"
									: "hover:text-primary hover:bg-primary/5"
							}`}
						>
							{link.name}
						</motion.button>
					))}
				</div>

				{/* Download Resume Button */}
				<a
					href='https://drive.google.com/file/d/1Za__uJBFX-tIBxtUR9oSLl732Rf1y6Ll/view?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'
				>
					<motion.button
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						className='hidden md:flex items-center md:text-sm lg:text-base md:gap-1 lg:gap-2 gradient-primary px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer'
					>
						<LuDownload size={16} />
						Download Resume
					</motion.button>
				</a>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className='md:hidden p-2 hover:text-primary transition-colors cursor-pointer'
				>
					{isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className='md:hidden absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-sm border-b shadow-lg'
				>
					<div className='px-4 py-4 space-y-4'>
						{navLinks.map((link) => (
							<button
								key={link.name}
								onClick={() => scrollTo(link.id)}
								className={`block cursor-pointer w-full text-left capitalize font-medium py-2 px-3 rounded-lg transition-all duration-200 ${
									activeSection === link.id
										? "text-primary bg-primary/10 border border-primary/20"
										: "hover:text-primary hover:bg-primary/5"
								}`}
							>
								{link.name}
							</button>
						))}

						<a
							href='https://drive.google.com/file/d/1ntrdlheRxfaC6SviGQSMKE48ytV-u_uQ/view?usp=sharing'
							target='_blank'
							rel='noopener noreferrer'
						>
							<button className='flex items-center gap-2 gradient-primary  px-4 py-2 rounded-lg w-full justify-center hover:shadow-lg transition-all duration-200 cursor-pointer'>
								<LuDownload size={16} />
								Download CV
							</button>
						</a>
					</div>
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;
