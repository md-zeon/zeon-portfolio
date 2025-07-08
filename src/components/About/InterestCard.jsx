import { motion } from "motion/react";

const InterestCard = ({ icon: Icon, label, description, delay }) => (
	<motion.div
		initial={{ opacity: 0, scale: 0.9 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ delay }}
		whileHover={{ scale: 1.05 }}
		className='text-center p-4 rounded-lg border hover:border-primary transition-all duration-200'
	>
		<Icon className='w-6 h-6 text-primary mx-auto mb-2' />
		<h4 className='font-semibold text-sm mb-1'>{label}</h4>
		<p className='text-xs'>{description}</p>
	</motion.div>
);

export default InterestCard;
