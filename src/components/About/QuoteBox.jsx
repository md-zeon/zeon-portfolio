import { motion } from "motion/react";

const QuoteBox = ({ quote, author }) => (
	<motion.div
		initial={{ opacity: 0, scale: 0.9 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ delay: 0.5 }}
		className='bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 text-center'
	>
		<p className='italic text-lg mb-3'>"{quote}"</p>
		<p className='text-sm'>- {author}</p>
	</motion.div>
);

export default QuoteBox;
