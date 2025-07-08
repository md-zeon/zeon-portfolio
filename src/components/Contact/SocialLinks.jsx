import { motion } from "motion/react";

const SocialLinks = ({ links }) => (
	<div className='flex gap-3'>
		{links.map(({ icon: Icon, href, label, color }, index) => (
			<motion.a
				key={label}
				href={href}
				aria-label={label}
				target='_blank'
				rel='noopener noreferrer'
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
				whileHover={{ scale: 1.1, y: -2 }}
				className={`w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:text-white transition-all duration-300 ${color}`}
			>
				<Icon className='w-5 h-5' />
			</motion.a>
		))}
	</div>
);

export default SocialLinks;
