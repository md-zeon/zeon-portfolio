import { motion } from "motion/react";
import { toast } from "react-toastify";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		emailjs
			.sendForm("gmail", "portfolio_contact_form", form, { publicKey: "dvmKWcUWqMF4fpjhV" })
			.then(() => {
				toast.success("Message sent successfully! I'll get back to you soon.");
				emailjs.send(
					"gmail",
					"portfolio_auto_reply",
					{
						name: form.name.value,
						email: form.email.value,
					},
					{ publicKey: "dvmKWcUWqMF4fpjhV" },
				);
				form.reset();
			})
			.catch((error) => {
				console.error(error);
				toast.error("Failed to send message. Please try again later.");
			});
	};

	return (
		<div className='border rounded-2xl p-8'>
			<h3 className='text-2xl font-bold mb-6 flex items-center gap-3'>
				<div className='w-8 h-8 gradient-primary rounded-lg flex items-center justify-center'>
					<LuSend className='w-4 h-4' />
				</div>
				Send Message
			</h3>

			<form
				onSubmit={handleSubmit}
				className='space-y-6'
			>
				{/* Name & Email */}
				<div className='grid md:grid-cols-2 gap-6'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
					>
						<label
							htmlFor='name'
							className='block text-sm font-medium mb-2'
						>
							Full Name *
						</label>
						<input
							type='text'
							id='name'
							name='name'
							required
							className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
							placeholder='Your name'
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
					>
						<label
							htmlFor='email'
							className='block text-sm font-medium mb-2'
						>
							Email Address *
						</label>
						<input
							type='email'
							id='email'
							name='email'
							required
							className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
							placeholder='your.email@example.com'
						/>
					</motion.div>
				</div>

				{/* Subject */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
				>
					<label
						htmlFor='subject'
						className='block text-sm font-medium mb-2'
					>
						Subject *
					</label>
					<input
						type='text'
						id='subject'
						name='subject'
						required
						className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
						placeholder="What's this about?"
					/>
				</motion.div>

				{/* Message */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
				>
					<label
						htmlFor='message'
						className='block text-sm font-medium mb-2'
					>
						Message *
					</label>
					<textarea
						id='message'
						name='message'
						required
						rows={6}
						className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none'
						placeholder='Tell me about your project or just say hello!'
					/>
				</motion.div>

				{/* Submit Button */}
				<motion.button
					type='submit'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.7 }}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					className='w-full flex items-center justify-center gap-2 gradient-primary px-8 py-4 rounded-lg font-medium hover:shadow-lg cursor-pointer'
				>
					<LuSend className='w-5 h-5' />
					Send Message
				</motion.button>
			</form>
		</div>
	);
};

export default ContactForm;
