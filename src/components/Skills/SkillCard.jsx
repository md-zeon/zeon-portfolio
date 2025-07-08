import { motion } from "motion/react";

const SkillCard = ({ Icon, name, color, index, reverse }) => {
	const key = `${reverse ? "rev" : "fwd"}-${index}`;
	const gradientFrom = color.replace("text-", "from-");

	return (
		<motion.div
			key={key}
			whileHover={{ y: -12, scale: 1.05, rotateY: 10 }}
			className='w-36 h-36 min-w-36 flex flex-col justify-center items-center gap-3 border rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 group cursor-pointer'
		>
			<Icon className={`text-5xl ${color} group-hover:scale-110 transition-transform duration-300`} />
			<span className='text-sm text-base-content font-semibold px-2 group-hover:text-primary transition-colors duration-200'>
				{name}
			</span>
			<div
				className={`w-12 h-1 bg-gradient-to-r ${gradientFrom} to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200`}
			/>
		</motion.div>
	);
};

export default SkillCard;
