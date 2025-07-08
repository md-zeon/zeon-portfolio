import { motion } from "motion/react";

const CallToAction = () => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ delay: 0.8 }}
		className='text-center mt-16'
	>
		<div className='bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8'>
			<h3 className='text-2xl font-bold mb-4'>Ready to Start Your Project?</h3>
			<p className='mb-6 max-w-2xl mx-auto'>Let's turn your ideas into reality. I'm here to help you build something amazing.</p>
			<a href='mailto:zeon.cse@gmail.com' className='gradient-primary px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200'>
				Schedule a Call
			</a>
		</div>
	</motion.div>
);

export default CallToAction;