import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import heroImage from "../assets/zeon.jpg";
import { motion } from "motion/react";

const Hero = () => {
	return (
		<section
			id='home'
			className='flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:py-20 md:px-16'
		>
			{/* Left Content */}
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.1 }}
				className='w-full md:w-1/2 text-center md:text-left space-y-2 sm:space-y-4'
			>
				<h1 className='text-4xl sm:text-5xl font-extrabold text-gradient-primary'>Hi, I'm Zeon</h1>
				<h2 className='text-2xl font-semibold text-secondary'>Full Stack Web Developer</h2>
				<p className='text-secondary-content max-w-md mx-auto md:mx-0'>
					I build scalable and dynamic web applications using modern technologies like React, Node.js, and MongoDB. I
					love clean UI, strong UX, and writing maintainable code.
				</p>

				{/* Social Icons */}
				<div className='flex justify-center md:justify-start gap-4 mt-4 text-2xl'>
					<a
						href='https://github.com/md-zeon'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-gradient-primary'
					>
						<FaGithub />
					</a>
					<a
						href='https://linkedin.com/in/yourusername'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-gradient-primary'
					>
						<FaLinkedin />
					</a>
					<a
						href='mailto:zeon.cse@email.com'
						className='hover:text-gradient-primary'
					>
						<FaEnvelope />
					</a>
				</div>

				{/* Resume Button */}
				<div className='mt-6'>
					<a
						href='/resume.pdf'
						download
						className='btn btn-primary rounded-lg inline-flex items-center gap-2'
					>
						<FaDownload />
						Download CV
					</a>
				</div>
			</motion.div>

			{/* Right Image */}
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className='w-full md:w-1/2 flex justify-center mb-10 md:mb-0'
			>
				<div className='relative group -scale-x-100'>
					<img
						src={heroImage}
						loading='lazy'
						alt='Portrait of Zeon - Full Stack Web Developer'
						className='w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 cursor-zoom-in rounded-full object-cover border-4 border-primary/70 shadow-lg transition-all duration-500 group-hover:scale-105'
					/>
					<div className='absolute inset-0 rounded-full border-4 border-primary animate-pulse z-[1] group-hover:scale-105 transition-all duration-500'></div>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
