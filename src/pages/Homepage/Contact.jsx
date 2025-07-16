import { color, motion } from "motion/react";
import { LuMail, LuPhone, LuGithub, LuLinkedin, LuMessageCircle, LuX } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import ContactInfoCard from "../../components/Contact/ContactInfoCard";
import SocialLinks from "../../components/Contact/SocialLinks";
import ContactForm from "../../components/Contact/ContactForm";
import CallToAction from "../../components/Contact/CallToAction";

const Contact = () => {
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
			details: "zeon.cse@gmail.com",
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
		{
			icon: LuLinkedin,
			href: "https://linkedin.com/in/zeanur-rahaman-zeon",
			label: "LinkedIn",
			color: "hover:bg-blue-600",
		},
		{ icon: LuX, href: "https://x.com/developerzeon", label: "X", color: "hover:bg-blue-400" },
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
								{contactInfo.map((info, i) => (
									<ContactInfoCard
										key={i}
										{...info}
										index={i}
									/>
								))}
							</div>

							{/* Social Links */}
							<SocialLinks links={socialLinks} />
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
						<ContactForm />
					</motion.div>
				</div>

				{/* Call to Action */}
				<CallToAction />
			</div>
		</section>
	);
};

export default Contact;
