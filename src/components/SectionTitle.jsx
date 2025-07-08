import { motion } from "motion/react";

const SectionTitle = ({ title, subtitle, isGradient }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.8 }}
		className='text-center mb-16'
	>
		<h2 className={`text-4xl lg:text-5xl font-bold ${isGradient ? "text-gradient-primary" : ""} mb-4`}>{title}</h2>
		<p className='text-xl max-w-3xl text-secondary mx-auto'>{subtitle}</p>
	</motion.div>
);

export default SectionTitle;
