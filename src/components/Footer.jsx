import { motion } from "motion/react";
import { LuGithub, LuLinkedin, LuMail, LuHeart, LuArrowUp } from "react-icons/lu";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const socialLinks = [
		{ icon: LuGithub, href: "https://github.com/md-zeon", label: "GitHub" },
		{ icon: LuLinkedin, href: "https://linkedin.com/in/zeanur-rahaman-zeon", label: "LinkedIn" },
		{ icon: LuMail, href: "mailto:zeon.cse@email.com", label: "Email" },
	];

	const quickLinks = [
		{ name: "About", href: "#about" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<footer className='gradient-bg text-base-content py-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid md:grid-cols-3 gap-12'>
					{/* Brand Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='space-y-4'
					>
						<h3 className='text-2xl font-bold text-gradient-primary'>Zeon.</h3>
						<p className='text-gray-400 leading-relaxed'>
							Full Stack MERN Developer passionate about creating amazing web experiences. Always learning, always
							building.
						</p>
						<div className='flex gap-4'>
							{socialLinks.map(({ icon: Icon, href, label }, index) => (
								<motion.a
									key={label}
									href={href}
									target='_blank'
									rel='noopener noreferrer'
									initial={{ opacity: 0, scale: 0 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ scale: 1.1, y: -2 }}
									className='w-10 h-10 bg-gray-800 hover:gradient-primary rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200'
								>
									<Icon className='w-5 h-5' />
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='space-y-4'
					>
						<h4 className='text-lg font-semibold'>Quick Links</h4>
						<ul className='space-y-2'>
							{quickLinks.map(({ name, href }) => (
								<li key={name}>
									<button
										onClick={() => {
											const element = document.getElementById(href.slice(1));
											element?.scrollIntoView({ behavior: "smooth" });
										}}
										className='text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer'
									>
										{name}
									</button>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='space-y-4'
					>
						<h4 className='text-lg font-semibold'>Get In Touch</h4>
						<div className='space-y-2 text-gray-400'>
							<p>zeon.cse@email.com</p>
							<p>Dhaka, Bangladesh</p>
							<p>Available for Work opportunities</p>
						</div>
					</motion.div>
				</div>

				{/* Bottom Section */}
				<div className='relative mt-12 pt-8 border-t border-gray-800 flex flex-col justify-center items-center text-center gap-4'>
					<p>
						© {new Date().getFullYear()} All rights reserved. Made with{" "}
						<LuHeart className='w-4 h-4 text-primary inline' /> by
						<span className="text-white font-bold"> Zeanur Rahaman Zeon</span>
					</p>

					{/* Back to Top Button */}
					<motion.button
						onClick={scrollToTop}
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						whileHover={{ scale: 1.1, y: -2 }}
						whileTap={{ scale: 0.9 }}
						className='absolute right-4 -top-14 w-10 h-10 animate-float gradient-primary rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-200 cursor-pointer'
					>
						<LuArrowUp className='w-5 h-5' />
					</motion.button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
