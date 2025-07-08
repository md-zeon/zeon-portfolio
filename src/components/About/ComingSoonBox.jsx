import { motion } from "motion/react";

const ComingSoonBox = () => (
	<motion.div
		initial={{ opacity: 0, scale: 0.9 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ delay: 0.5 }}
		className='border rounded-xl p-6 flex flex-col justify-between h-full'
	>
		<div>
			<h3 className='text-xl font-bold text-primary mb-4'>Coming Soon</h3>
			<p className='text-sm leading-relaxed'>
				This space is reserved for a timeline, featured achievements, or something fun. I’m still deciding what makes
				the most impact here.
			</p>
		</div>
		<div className='mt-6'>
			<a
				href='#contact'
				className='text-sm text-primary hover:underline transition duration-150'
			>
				Got ideas? Let's chat →
			</a>
		</div>
	</motion.div>
);

export default ComingSoonBox;
