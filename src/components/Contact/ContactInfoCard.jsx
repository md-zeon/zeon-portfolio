import { motion } from "motion/react";

const ContactInfoCard = ({ icon: Icon, title, details, href, color, index }) => (
	<motion.a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: index * 0.1 }}
		whileHover={{ x: 5, scale: 1.02 }}
		className='flex items-center gap-4 p-4 border rounded-xl hover:shadow-lg transition-all duration-300'
	>
		<div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
			<Icon className='w-6 h-6' />
		</div>
		<div>
			<h4 className='font-semibold'>{title}</h4>
			<p>{details}</p>
		</div>
	</motion.a>
);

export default ContactInfoCard;
