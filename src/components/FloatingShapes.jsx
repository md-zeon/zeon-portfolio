import { motion } from "motion/react";

const FloatingShapes = () => {
	return (
		<div className='absolute inset-0 pointer-events-none z-0'>
			{/* Shape 1: Floating Code Tag */}
			<motion.div
				animate={{
					y: [0, -30, 0],
					rotate: [0, 10, 0],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className='absolute top-0 left-1/4 w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl opacity-20 shadow-2xl backdrop-blur-sm'
			>
				&lt;/&gt;
			</motion.div>

			{/* Shape 2: Square */}
			<motion.div
				animate={{
					y: [0, 30, 0],
					rotate: [0, -10, 0],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2,
				}}
				className='absolute top-32 right-1/4 w-16 h-16 gradient-accent rounded-xl flex items-center justify-center text-accent-foreground font-bold opacity-20 shadow-2xl backdrop-blur-sm'
			>
				{}
			</motion.div>

			{/* Shape 3: Circle with # */}
			<motion.div
				animate={{
					y: [0, -20, 0],
					x: [0, 20, 0],
					rotate: [0, 15, 0],
				}}
				transition={{
					duration: 7,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 4,
				}}
				className='absolute top-16 left-3/4 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold opacity-20 shadow-2xl'
			>
				#
			</motion.div>
		</div>
	);
};

export default FloatingShapes;
