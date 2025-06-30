import { color, motion } from "motion/react";
import { LuMail, LuPhone, LuMapPin, LuSend, LuGithub, LuLinkedin, LuTwitter, LuMessageCircle } from "react-icons/lu";
import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		toast.success("Message sent successfully! I'll get back to you soon.");
	};
	const contactInfo = [
		{
			icon: LuPhone,
			title: "Phone",
			details: "+880 1521721040",
			href: "tel:+8801521721040",
			color: "from-green-500 to-emerald-500",
		},
		{
			icon: LuMail,
			title: "Email",
			details: "zeon.cse@email.com",
			href: "mailto:zeon.cse@email.com",
			color: "from-blue-500 to-cyan-500",
		},
		{
			icon: FaWhatsapp,
			title: "Whatsapp",
			details: "+8801521721040",
			href: "https://wa.me/8801521721040",
			color: "from-emerald-500 to-green-500",
		},
	];

	const socialLinks = [
		{ icon: LuGithub, href: "https://github.com/md-zeon", label: "GitHub", color: "hover:bg-gray-700" },
		{ icon: LuLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn", color: "hover:bg-blue-600" },
		{ icon: LuTwitter, href: "https://twitter.com/yourusername", label: "Twitter", color: "hover:bg-blue-400" },
	];

	return (
		<section
			id='contact'
			className='py-20'
		>
			<div className='px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
						className='w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6'
					>
						<LuMessageCircle className='w-8 h-8' />
					</motion.div>
					<h2 className='text-4xl lg:text-5xl font-bold mb-4'>Let's Work Together</h2>
					<p className='text-xl  max-w-3xl mx-auto'>
						Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='lg:col-span-2 space-y-8'
					>
						<div className=' border rounded-2xl p-8'>
							<h3 className='text-2xl font-bold mb-6'>Get in Touch</h3>
							<p className=' leading-relaxed mb-8'>
								I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Feel
								free to reach out if you'd like to connect!
							</p>

							{/* Contact Info Cards */}
							<div className='space-y-4 mb-8'>
								{contactInfo.map(({ icon: Icon, title, details, href, color }, index) => (
									<motion.a
										key={title}
										href={href}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										whileHover={{ x: 5, scale: 1.02 }}
										className='flex items-center gap-4 p-4 border rounded-xl hover:shadow-lg transition-all duration-300'
									>
										<div
											className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white shadow-lg`}
										>
											<Icon className='w-6 h-6' />
										</div>
										<div>
											<h4 className='font-semibold '>{title}</h4>
											<p className=''>{details}</p>
										</div>
									</motion.a>
								))}
							</div>

							{/* Social Links */}
							<div>
								<div className='flex gap-3'>
									{socialLinks.map(({ icon: Icon, href, label, color }, index) => (
										<motion.a
											key={label}
											href={href}
											target='_blank'
											rel='noopener noreferrer'
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
											whileHover={{ scale: 1.1, y: -2 }}
											className={`w-12 h-12 bg-muted rounded-xl flex items-center justify-center  hover:text-white transition-all duration-300 ${color}`}
										>
											<Icon className='w-5 h-5' />
										</motion.a>
									))}
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='lg:col-span-3'
					>
						<div className=' border rounded-2xl p-8'>
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
											className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 '
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
											className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 '
											placeholder='your.email@example.com'
										/>
									</motion.div>
								</div>

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
										className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 '
										placeholder="What's this about?"
									/>
								</motion.div>

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
										className='w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none '
										placeholder='Tell me about your project or just say hello!'
									/>
								</motion.div>

								<motion.button
									type='submit'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.7 }}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className='w-full flex items-center justify-center gap-2 gradient-primary px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 cursor-pointer'
								>
									<LuSend className='w-5 h-5' />
									Send Message
								</motion.button>
							</form>
						</div>
					</motion.div>
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.8 }}
					className='text-center mt-16'
				>
					<div className='bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8'>
						<h3 className='text-2xl font-bold mb-4'>Ready to Start Your Project?</h3>
						<p className=' mb-6 max-w-2xl mx-auto'>
							Let's turn your ideas into reality. I'm here to help you build something amazing.
						</p>
						<a
							href='mailto:zeon.cse@gmail.com'
							className='gradient-primary cursor-pointer px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200'
						>
							Schedule a Call
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
