import aboutImg from "../assets/zeon.jpg";
import { motion } from "motion/react";

const About = () => {
	return (
		<section
			id='about'
			className='px-6 py-12 md:px-16 md:py-20'
		>
			<div className='flex flex-col md:flex-row items-center gap-10'>
				{/* Left Image */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='w-full md:w-1/2 flex md:justify-start justify-center'
				>
					<div className='relative group'>
						<img
							src={aboutImg}
							alt='Zeon profile'
							loading='lazy'
							className='w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl object-cover border-4 border-primary/70 shadow-xl group-hover:scale-105 transition-all duration-500'
						/>
						<div className='absolute inset-0 border-4 border-primary animate-pulse z-[1] rounded-xl group-hover:scale-105 transition-all duration-500'></div>
					</div>
				</motion.div>

				{/* Right Content */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='w-full md:w-1/2 md:border-l-4 md:border-primary pl-4 space-y-6 text-center md:text-left'
				>
					<h2 className='text-3xl sm:text-4xl font-bold text-gradient-primary'>About Me</h2>

					<p className='text-secondary-content leading-relaxed max-w-xl'>
						👋 I'm <span className='font-semibold text-gradient-primary'>Zeanur Rahaman Zeon</span>, a passionate full-stack developer from
						Bangladesh. I specialize in building interactive, user-friendly web applications using the MERN stack
						(MongoDB, Express.js, React, Node.js).
					</p>

					<p className='text-secondary-content leading-relaxed max-w-xl'>
						I'm currently a CSE student at Northern University, learning full-stack web development alongside my
						academic studies. I spend most of my time working on projects, practicing DSA, and strengthening my
						problem-solving skills.
					</p>

					<p className='text-secondary-content leading-relaxed max-w-xl'>
						When I'm not coding, I enjoy exploring open-source projects, teaching junior students, and learning deeper
						concepts in computer science fundamentals.
					</p>

					<div className='mt-6'>
						<a
							href='#contact'
							className='btn btn-outline btn-primary'
						>
							Let's Connect
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
